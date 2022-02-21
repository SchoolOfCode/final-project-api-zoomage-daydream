import pg from "pg";

import { connectionString } from "../config.js";
console.log(process.env.muu)


const pool = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;

