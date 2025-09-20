import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

(async () => {
  try {
    const res = await pool.query("SELECT * FROM items");
    console.log("DB Connected! Rows:", res.rows);
  } catch (err) {
    console.error("Connection Error:", err.message);
  } finally {
    await pool.end();
  }
})();
