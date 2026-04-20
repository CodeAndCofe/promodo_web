import { pool } from "../tools";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";   // ← Install this: npm install bcrypt

export async function POST(req) {
  try {
    const { username, password, tag } = await req.json();

    // Basic validation
    if (!username || username.length < 3) {
      return NextResponse.json(
        { message: "Username must be at least 3 characters" },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    if (!tag || tag.length < 2) {
      return NextResponse.json(
        { message: "Tag is required" },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUser = await pool.query(
      `SELECT username FROM users WHERE username = $1`,
      [username]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }   // 409 Conflict
      );
    }

    // Hash the password (very important!)
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user with hashed password
    const userResult = await pool.query(
      `INSERT INTO users (username, password) 
       VALUES ($1, $2) 
       RETURNING id`,
      [username, hashedPassword]
    );

    const userId = userResult.rows[0].id;

    // Insert profile
    await pool.query(
      `INSERT INTO profile (tag, id) VALUES ($1, $2)`,
      [tag, userId]
    );

    return NextResponse.json({
      message: "User created successfully",
      success: true
    }, { status: 201 });

  } catch (err) {
    console.error("Registration error:", err);   // Log on server only

    return NextResponse.json({
      message: "Registration failed. Please try again.",
      success: false
    }, { status: 500 });
  }
}