import { Pool } from "pg";

const connectionString = process.env.DB_CONNECTION;

if (!connectionString) {
    throw new Error("❌ DB_CONNECTION environment variable is missing!");
}

const pool = new Pool({
    connectionString,
});


process.on("SIGINT", async () => {
    await pool.end();
    console.log("Pool has ended");
});






export { pool };