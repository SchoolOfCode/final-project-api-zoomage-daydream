import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS spaces (id SERIAL PRIMARY KEY,  userid SERIAL REFERENCES users(id), address  VARCHAR, type_of_space VARCHAR,  purpose_of_space VARCHAR,  fraction_of_space VARCHAR, amenities VARCHAR [], additional_information VARCHAR,    fromDate DATE, toDate DATE, images VARCHAR [])`
);

console.log(response);

db.end();