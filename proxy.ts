import { NextRequest, NextResponse} from "next/server";

// it runs before the actuall route =>

export function proxy( req  : NextRequest)
{
    const data = req.cookies.get("session_id");
    console.log("+==============+\n")
    console.log("inside proxy")
    const cookie = data?.value;
    console.log (cookie);
    if (!cookie)
        return NextResponse.redirect(new URL("/", req.url));    // console.log(data?.value)
    
    console.log("\n+==============+")
    return (NextResponse.next())
}



export const  config =
{
    matcher :  [
        //exclude expression
        '/((?!api|_next/static|_next/image|favicon.ico|^/$|forbiden|notfound).*)'
    ]
}