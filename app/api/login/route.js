import { pool } from "../tools/pool";
import bcryptjs from "bcryptjs"
import { temporary_cache } from "@/global";
import { NextResponse } from "next/server";


// query for user id and return it
async function validateUser(username, password)
{
    const existingUser = await pool.query(
        `SELECT password, id FROM users WHERE username = $1`,
        [username]
    );
    if (existingUser.rows.length === 0)
        return null;
    const valid = await bcryptjs.compare(password, existingUser.rows[0].password);
    return valid ? existingUser.rows[0] : null;
}

export async function POST(req) {
    try {
        console.log("\n login requested\n");
        const { username, password } = await req.json();
        // basic length checks inline (or call checker with await)

        const user = await validateUser(username, password);
        if (!user) return NextResponse.json({ message: "Invalid credentials", ok: false }, { status: 401 });
        
        const session_id = user.id + 33;
        temporary_cache.set(session_id, user.id);

        const response = NextResponse.json({ message: "success", ok: true }, { status: 200 });
        
        response.cookies.set("session_id", session_id);
        return response;

    } 
    catch (err)
    {
        return NextResponse.json({ message: "Login failed", ok: false }, { status: 500 });
    }
}