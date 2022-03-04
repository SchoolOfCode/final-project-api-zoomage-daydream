import db from "../db/connection.js";

export async function getAllUsers() {
  const result = await db.query(`SELECT * FROM users;`);
  return result.rows;
}

export async function getUserByID(id) {
  const result = await db.query(`SELECT * FROM users WHERE id = $1;`, [id]);
  return result.rows;
}

export async function getUserByEmail(email) {
  const result = await db.query(`SELECT * FROM users WHERE email = $1;`, [
    email,
  ]);

  return result.rows;
}

// Add user details to user table
export async function addUser(full_name, username, email, date_of_birth) {
  const result = await db.query(
    `INSERT INTO users (full_name, username, email, date_of_birth) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [full_name, username, email, date_of_birth]
  );
  return result.rows;
}
