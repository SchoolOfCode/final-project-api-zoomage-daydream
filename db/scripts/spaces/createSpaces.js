import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS spaces (id SERIAL PRIMARY KEY,email VARCHAR, address  VARCHAR, type_of_space VARCHAR,  purpose_of_space VARCHAR,  fraction_of_space VARCHAR, amenities VARCHAR [], additional_information VARCHAR, date VARCHAR [], startTime VARCHAR, endTime VARCHAR, images VARCHAR [], hourly_price INT)`
);

console.log(response);

db.end();
