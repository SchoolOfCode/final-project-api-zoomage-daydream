import { request } from "express";
import { TestWatcher } from "jest";
import pg from "pg";

import { connectionString } from "../config.js";

const pool = new pg.Pool({
  connectionString,
<<<<<<< HEAD
  ssl: {
    rejectUnauthorized: false,
  },
=======
  // ssl: {
  //   rejectUnauthorized: false,
  // },
>>>>>>> f5f938d6f578bd452bd88c796f1ffeb260808ced
});

export default pool;
