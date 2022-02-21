import db from "../../connection.js";
import { users } from "../../../Data/tables.js";

users.forEach(async (user) => {
  const response = await db.query(
    `INSERT INTO users (full_name, username, email, date_of_birth ) VALUES ($1, $2, $3,$4);`,
    [user.full_name, user.username, user.email, user.date_of_birth]
  );
  console.log(response);
});

db.end();
