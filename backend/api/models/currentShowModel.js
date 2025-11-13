import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

// Set up the connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,   // e.g., "postgresql://user:pass@host:5432/radiodb"
  // optionally other pool settings
});

// Function to get the current show
export const getCurrentShow = async () => {
  const now = new Date();

  // Query: find a row in schedule table where start_time ≤ now < end_time
  const sql = `
    SELECT title
    FROM schedule
    WHERE start_time <= $1
      AND end_time > $1
    ORDER BY start_time DESC
    LIMIT 1
  `;
  const values = [ now ];

  try {
    const result = await pool.query(sql, values);
    if (result.rows.length > 0) {
      return { name: result.rows[0].title, isLive: true };
    } else {
      return { name: "", isLive: false };
    }
  } catch (err) {
    console.error("Error querying current show:", err);
    // Return no show live in error case
    return { name: "", isLive: false };
  }
};
