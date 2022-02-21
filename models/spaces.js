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
export async function getSpaceBySearch(location, fromdate, todate, type) {
  const result = await db.query(
    `SELECT * FROM spaces WHERE address ILIKE '%' || $1 || '%' AND  type_of_space = $2  AND fromdate >= $3 AND
          toDate <=$4`,
    [location, type, fromdate, todate]
  );
  return result.rows;
}
