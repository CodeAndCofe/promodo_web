
import { pool } from "../tools";

export  async function POST(req)
{
    try
    {
        const {username, password, tag} = await req.json();
        console.log(tag);
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, password]);
        await pool.query("INSERT INTO profile (tag) VALUES ($1)", [tag, result.rows[0].id]);
        return Response.json({
            message : "response sucess",
        })

    }
    catch(err)
    {
        return Response.json({
            message : "response fails",
            error : err
        })
    }
    
}


export  async function GET()
{
    try
    {
        const result = await pool.query('SELECT * FROM users');

        return Response.json({

            message : result.rows,
        })

    }
    catch(err)
    {
        return Response.json({message : "response fails"})
    }
    
}