import db from "../db/connection.js";
// Get all spaces from spaces table
export async function getAllSpaces() {
  const result = await db.query(`SELECT * FROM spaces`);
  return result.rows;
}

// Search for a space by ID
export async function getSpaceByID(id) {
  const result = await db.query(`SELECT * FROM spaces WHERE id = $1;`, [id]);
  return result.rows;
}

// More specific search for a space, to be used on the reserve on home page
export async function getSpaceBySearch(location, purpose) {
  const result = await db.query(
    `SELECT * FROM spaces WHERE address ILIKE '%' || $1 || '%' AND purpose_of_space ILIKE '%' || $2 || '%'`,
    [location, purpose]
  );
  return result.rows;
}

// get space bt email
export async function getSpaceByEmail(email) {
  const result = await db.query(`SELECT * FROM spaces WHERE email = $1`, [
    email
  ]);
  return result.rows;
}

// Add property details to spaces table
export async function addSpace(
  email,
  address,
  type_of_space,
  purpose_of_space,
  fraction_of_space,
  amenities,
  additional_information,
  date,
  startTime,
  endTime,
  imageURL,
  hourly_price
) {
  const result = await db.query(
    `INSERT INTO spaces (email,address, type_of_space, purpose_of_space, fraction_of_space, amenities, additional_information, date, startTime, endTime, images, hourly_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12) RETURNING *;`,
    [
      email,
      address,
      type_of_space,
      purpose_of_space,
      fraction_of_space,
      amenities,
      additional_information,
      date,
      startTime,
      endTime,
      imageURL,
      hourly_price
    ]
  );
  console.log(result);
  return result.rows;
}
