import db from "../../connection.js";
console.log(db);
const response = await db.query(
  `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, full_name VARCHAR, username VARCHAR, email VARCHAR, date_of_birth DATE);`
);

console.log(response);

db.end();
