import db from "../../connection.js";
import {spaces} from "../../../../Data/tables.js"


spaces.forEach(async (user)=>{
const response = await db.query(
  `INSERT INTO spaces (address,  type_of_space, purpose_of_space, fraction_of_space,amenities,additional_information,fromDate,toDate,images ) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9);`,
  [user.address, user.type_of_space,user.purpose_of_space,user.fraction_of_space,user.amenities,user.additional_information, user.fromDate,user.toDate, user.images]
)
console.log(response);
})



db.end();
