import { access } from "fs";
import {pool} from "../tools"

export async function POST(req)
{
    const  {username, password} = await req.json();
    try
    {
        const res = await pool.query(
            `SELECT username, password
             FROM users WHERE username = $1 AND  password = $2`,
            [username, password]
        );
        if (res.rows.length !== 1)
            throw ("user not exist");
    }
    catch(err)
    {
        return (Response.json({
            message : "request fails",
            err : err,
            access : false
        }))
    }

    return (
        Response.json(
            {
                message : "requst sucess",
                access : true
            }
        )
    )
}