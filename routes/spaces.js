import multer from "multer";
import cloudinary from "cloudinary";

import express from "express";

import {
  addSpace,
  getAllSpaces,
  getSpaceByID,
  getSpaceBySearch,
  getSpaceByEmail
} from "../models/spaces.js";

import { cloudName, apiKey, apiSecret } from "../config.js";

const router = express.Router();
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");
export { multerUploads };

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

/* GET all spaces */
router.get("/", async function (req, res) {
  const { address, purpose_of_space, email } = req.query;

  if (address !== undefined && purpose_of_space !== undefined) {
    const space = await getSpaceBySearch(address, purpose_of_space);

    res.json({
      success: true,
      payload: space
    });
  } else if (email !== undefined) {
    const space = await getSpaceByEmail(email);

    res.json({
      success: true,
      payload: space
    });
  } else {
    const spaces = await getAllSpaces();
    res.json({
      success: true,
      payload: spaces
    });
  }
});

// GET spaces by ID
router.get("/:id", async function (req, res, next) {
  const id = Number(req.params.id);
  const space = await getSpaceByID(id);

  res.json({
    success: true,
    payload: space
  });
});

//POST request
router.post("/", async function (req, res) {
  const {
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
    images,
    hourly_price
  } = req.body;

  const imageURL = [];

  for (let i = 0; i < images.length; i++) {
    const cloudinaryRes = await cloudinary.uploader.upload(images[i].base64);
    imageURL.push(cloudinaryRes.secure_url);
  }
  
  const newSpace = await addSpace(
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
  );

  res.json({ success: true, payload: newSpace });
});

export default router;
