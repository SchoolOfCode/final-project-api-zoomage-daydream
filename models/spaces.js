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
export async function getSpaceBySearch(location, fromDate, todate, type) {
  const result = await db.query(
    `SELECT * FROM spaces WHERE address ILIKE '%' || $1 || '%' AND  type_of_space = $2  AND fromDate >= $3 AND
          toDate <=$4`,
    [location, type, fromDate, todate]
  );
  return result.rows;
}

// Add property details to spaces table
export async function addSpace(
  address,
  type_of_space,
  purpose_of_space,
  fraction_of_space,
  amenities,
  additional_information,
  fromDate,
  toDate,
  images,
  hourly_price
) {
  db.query("SELECT * FROM spaces", function (err, result) {
    console.log(result);
  });
  const result = await db.query(
    `INSERT INTO spaces (address, type_of_space, purpose_of_space, fraction_of_space, amenities, additional_information, fromDate, toDate, images, hourly_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
    [
      address,
      type_of_space,
      purpose_of_space,
      fraction_of_space,
      amenities,
      additional_information,
      fromDate,
      toDate,
      images,
      hourly_price,
    ]
  );
  return result.rows;
}
