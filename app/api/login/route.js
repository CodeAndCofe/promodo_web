import { pool } from "../tools/pool";
import { hashing, checker } from "../tools/handler";
import bcryptjs from "bcryptjs"
import { NextResponse } from "next/server";
import { existsSync } from "fs";



export async function POST(req) {
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

        const bRes = await bcryptjs.compare(password, existingUser.rows[0].password);
        console.log(bRes);
        return(
            NextResponse.json(
                {
                    message : "sucess to log in",
                    success: true,
                    id: existingUser.rows[0].id
                },
                {
                    status : 200
                }
            )    
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