import express from "express";
import {
  addSpace,
  getAllSpaces,
  getSpaceByID,
  getSpaceBySearch,
} from "../models/spaces.js";
import { cloudName, apiKey, apiSecret } from "../config.js";

const router = express.Router();
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

/* GET all spaces */
router.get("/", async function (req, res) {
    const { address, type_of_space} = req.query;
  if(address!==undefined&&type_of_space!==undefined){ 
    
     const space = await getSpaceBySearch(
    address,
    type_of_space,
  )

 
 res.json({
    success: true,
    payload: space,
  })
}

else{const spaces = await getAllSpaces();
  res.json({
    success: true,
    payload: spaces,
  });}
  
});
// GET spaces by ID

router.get("/:id", async function (req, res, next) {
  const id = Number(req.params.id);
  const space = await getSpaceByID(id);

  res.json({
    success: true,
    payload: space,
  });
});


//POST request
router.post("/", async function (req, res, next) {
  const {
    address,
    type_of_space,
    purpose_of_space,
    fraction_of_space,
    amenities,
    additional_information,
    date,
    startTime,
    endTime,
    images,
    hourly_price,
  } = req.body;

  const imageURL = [];
  for (let i = 0; i < images.length; i++) {
    const cloudinaryRes = await cloudinary.uploader.upload(images[i]);
    imageURL.push(cloudinaryRes.secure_url);
  }

  // console.log(imageURL);
  const newSpace = await addSpace(
    address,
    type_of_space,
    purpose_of_space,
    fraction_of_space,
    amenities,
    additional_information,
    date,
    startTime,
    endTime,
    images,
    hourly_price
  );

  res.json({ success: true, payload: newSpace });
});

export default router;