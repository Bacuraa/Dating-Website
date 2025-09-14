import "dotenv/config";  // loads .env automatically

// import express from "express";
// import registerRouter from './routes/register.js'

// const app = express()
// const PORT = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.use('/register', registerRouter)

// app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

import "dotenv/config";
import fs from "fs";
import path from "path";
import { Pool } from "pg";

const ca = fs.readFileSync(path.join(process.cwd(), "src/certs/il-central-1-bundle.pem"), "utf8");

const pool = new Pool({
    // Connection string
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT) || 5432,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: {
        ca,                         // trust the RDS regional root(s)
        rejectUnauthorized: true,   // actually verify
        servername: process.env.PGHOST, // ensure TLS verifies the hostname
    },
});

async function main() {
    try {
        const sql = `
      CREATE TABLE IF NOT EXISTS test_users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now()
      );
    `;
        await pool.query(sql);
        console.log("✅ Table created successfully!");
    } catch (err) {
        console.error("❌ Error creating table:", err);
    } finally {
        await pool.end(); // close pool
    }
}

main()