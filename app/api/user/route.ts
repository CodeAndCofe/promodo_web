import {pool} from "../tools/pool"
import { NextResponse } from "next/server"


export async function GET(req : any) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get("id");
    const {rows} = pool.quary("SELECT * FROM profile, tasks WHERE id=$1", [id]);
    console.log(rows);
    console.log(rows);
    return (
        NextResponse.json({
            data : ""
        }, {status : 200})
    )
}