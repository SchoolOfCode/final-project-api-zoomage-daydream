import db from "../../connection.js";
import { spaces } from "../../../Data/tables.js";

spaces.forEach(async (user) => {
  const response = await db.query(
    `INSERT INTO spaces (email, address,  type_of_space, purpose_of_space, fraction_of_space,amenities,additional_information,date, startTime, endTime, images, hourly_price ) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10, $11,$12);`,
    [user.email,
      user.address,
      user.type_of_space,
      user.purpose_of_space,
      user.fraction_of_space,
      user.amenities,
      user.additional_information,
      user.date,
      user.startTime,
      user.endTime,
      user.images,
      user.hourly_price,
    ]
  );
});

db.end();
