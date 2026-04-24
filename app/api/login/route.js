import { pool } from "../tools/pool";
import { hashing, checker } from "../tools/handler";
import bcryptjs from "bcryptjs"
import { NextResponse } from "next/server";

const temporary_cache = new Map();

export async function POST(req) {
    let userid = 0;
    let session_id = 0;
  try {
        const { username, password} = await req.json();
        const res = await checker(username, password);
        if (!res.success)
        {
            return (
                NextResponse.json(
                    {
                        message : res.message, success: false
                    },
                    {
                        status : res.status
                    }
                )
            )
        }
        
        const existingUser = await pool.query
        (
            `SELECT password, id FROM users WHERE username = $1`,
            [username]
        );


        if (existingUser.rows.length <= 0) {
            return NextResponse.json(
                { message: "Cant's log in", success: false },
                { status: 409 }
            );
        }
        userid = existingUser.rows[0].id;  
        const bRes = await bcryptjs.compare(password, existingUser.rows[0].password);
        // imaginary creating 
        session_id = userid + 33;
        temporary_cache.set(session_id, userid);
        return(
            NextResponse.json(
                {
                    message : "sucess to log in",
                    success: true,
                },
                {
                    status : 200
                }
            ).cookies.set("session_id", session_id) 
        )

    }
    catch (err) {
        console.error("login error:", err);

        return NextResponse.json({
        message: "Registration failed. Please try again.",
        success: false,
        }, { status: 500 });
    }
}