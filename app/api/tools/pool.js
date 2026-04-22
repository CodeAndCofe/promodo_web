import { Pool } from "pg";

const connectionString = process.env.DB_CONNECTION;

if (!connectionString) {
    throw new Error("❌ DB_CONNECTION environment variable is missing!");
}

const pool = new Pool({
    connectionString,
});


let shuttingDown = false;

process.on("SIGINT", async () => {
  if (shuttingDown) return;
  shuttingDown = true;

  await pool.end();
  console.log("Pool closed");
});





export { pool };