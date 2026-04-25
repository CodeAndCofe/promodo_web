import { NextResponse } from "next/server";
import { pool } from "../tools/pool";
import { hashing} from "../tools/handler";
import { temporary_cache } from "@/global";



async function check_parsing(username, password, pass_conf, tag)
{
    if (!username || !password || !tag || !pass_conf)
    {
        return ({success : false, message : "make sure to fill evrything", staus : 400});
    }

    if (username.length < 3)
        return ({success : false, message : "username length should more than 3 characters", status : 400});
    
    if (password.length < 8)
        return ({success : false, message : "password length should be 8 digits or more", status : 400});
    
    if (pass_conf !== password)
        return ({success : false, message : "password arent matching", status : 400});
    
    return ({success : true, message : "", status : 200});
}



export async function POST(req) {
  try {
      const { username, password, pass_conf, tag } = await req.json();

      const res = await check_parsing(username, password, pass_conf, tag);

      if (!res.success)
      {
          return (NextResponse.json(
            {
              message : res.message,
              ok : false
            },
            {status : res.status}
          ))
      }

      const existingUser = await pool.query(
        `SELECT username FROM users WHERE username = $1`,
        [username]
      );

      if (existingUser.rows.length > 0) {
        return NextResponse.json(
          {
            message: "User already exists",
            ok : false
          },
          { status: 409 }
        );
      }

      // **hashing password and save it in database:
      const hashedPassword = await hashing(password, 12);

      const userResult = await pool.query(
        `INSERT INTO users (username, password) 
        VALUES ($1, $2) 
        RETURNING id`,
        [username, hashedPassword]
      );
      // end**
      const userId = userResult.rows[0].id;


      await pool.query(
        `INSERT INTO profile (tag, id) VALUES ($1, $2)`,
        [tag, userId]
      );

      const next_response = NextResponse.json(
        {
          message: "Acount Created",
          ok : true
        },
        { status: 201 }
      );

      const id =await pool.query(
        `SELECT id FROM users WHERE username=$1`,
        [username]
      );
      
      // imaginary hashed user : 
      const _id = id.rows[0].id + 45;
      //end

      temporary_cache.set(_id, id.rows[0].id);

      next_response.cookies.set("session_id", _id);
      return next_response;

      }
      catch (err)
      {
        console.error("Registration error:", err);

        return NextResponse.json({
          message: "Registration failed. Please try again.",
          ok : false
        }, { status: 500 });
  }
}