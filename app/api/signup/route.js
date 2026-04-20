
import { pool } from "../tools";

export  async function POST(req)
{
    try
    {
        const {username, password, tag} = await req.json();


        const   row = await pool.query
        (`
            SELECT username
            FROM users
            WHERE username = $1;
            `
            , [username]
        );
        if (row.rows.length !== 0)
                throw ("user already exist");
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, password]);
        await pool.query("INSERT INTO profile (tag, id) VALUES ($1, $2)", [tag, result.rows[0].id]);
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
