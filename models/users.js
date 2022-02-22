import db from "../db/connection.js";

export async function getAllUsers() {
  const result = await db.query(`SELECT * FROM users;`);
  return result.rows;
}

// Add user details to user table
export async function addUser(full_name, username, email, date_of_birth) {
  const result = await db.query(
    `INSERT INTO users (full_name, username, email, date_of_birth) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [full_name, username, email, date_of_birth]
  );
  console.log(result);
  return result.rows;
}
