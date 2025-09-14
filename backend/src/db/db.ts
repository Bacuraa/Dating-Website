// import { Pool } from "pg";

// // Create a connection pool
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: true }, // needed for RDS
// });

// // Export a helper function for queries
// export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
//     const result = await pool.query<T>(text, params);
//     return result.rows;
// }

// export default pool;