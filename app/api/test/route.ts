import { NextRequest, NextResponse } from "next/server";



export async function GET(request : NextRequest)
{
    const sessionId = request.cookies.get("session_id")?.value;

    console.log("session id  ===  " + sessionId);
    return (Response.json( {ok: true}, {status : 200}))
}