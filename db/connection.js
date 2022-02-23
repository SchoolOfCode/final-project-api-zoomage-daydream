import pg from "pg";

import { connectionString } from "../config.js";

console.log(connectionString);

const pool = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
