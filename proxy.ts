import { NextRequest, NextResponse} from "next/server";
// // import {temporary_cache} from "@/global"
// // it runs before the actuall route =>

export default function proxy( req  : NextRequest)
{
    
}
// {
//     const data = req.cookies.get("session_id");
//     console.log("+==============+\n")
//     console.log("inside proxy")
//     console.log("Middleware path:", req.nextUrl.pathname);
//     const cookie = data?.value ?? null;
//     // temporary_cache.get(cookie);
//     // console.log (temporary_cache);
//     console.log(cookie)
//     if (!cookie)
//         return NextResponse.redirect(new URL("/", req.url));
//     console.log("\n+==============+")
//     return (NextResponse.next())
// }



// export const  config =
// {
//     matcher :  [
//         '/((?!api|_next/static|_next/image|favicon.ico|forbiden|notfound|^/$).*)'
//     ]
// }