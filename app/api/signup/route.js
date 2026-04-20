import { NextResponse } from "next/server";
import { pool } from "../tools/pool";
import { hashing, checker } from "../tools/handler";




export async function POST(req) {
  try {
      const { username, password, tag } = await req.json();
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
      
      if (!tag || tag.length < 2) {
        return NextResponse.json(
          { message: "Tag is required" },
          { status: 400 }
        );
      }

      const existingUser = await pool.query(
        `SELECT username FROM users WHERE username = $1`,
        [username]
      );

      if (existingUser.rows.length > 0) {
        return NextResponse.json(
          { message: "User already exists" },
          { status: 409 }
        );
      }

      const hashedPassword = hashing(password, 12);

      const userResult = await pool.query(
        `INSERT INTO users (username, password) 
        VALUES ($1, $2) 
        RETURNING id`,
        [username, hashedPassword]
      );

      const userId = userResult.rows[0].id;


      await pool.query(
        `INSERT INTO profile (tag, id) VALUES ($1, $2)`,
        [tag, userId]
      );

      return NextResponse.json({
        message: "User created successfully",
        success: true
      }, { status: 201 });

      }
      catch (err)
      {
        console.error("Registration error:", err);   // Log on server only

        return NextResponse.json({
          message: "Registration failed. Please try again.",
          success: false
        }, { status: 500 });
  }
}