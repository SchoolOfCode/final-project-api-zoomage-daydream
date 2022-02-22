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
router.get("/", async function (req, res, next) {
  const spaces = await getAllSpaces();

  res.json({
    success: true,
    payload: spaces,
  });
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
// GET space by search
router.get("/", async function (req, res, next) {
  const { address, type_of_space, fromDate, toDate } = req.query;
  const space = await getSpaceBySearch(
    address,
    type_of_space,
    fromDate,
    toDate
  );

  res.json({
    success: true,
    payload: space,
  });
});
export default router;

//POST request
router.post("/", async function (req, res, next) {
  const {
    address,
    type,
    purpose,
    fraction,
    amenities,
    additionalInfo,
    fromDate,
    toDate,
    images,
    price,
  } = req.body;

  const imageURL = [];
  images.forEach(async (image) => {
    const newURL = await cloudinary.uploader.upload(image);
    imageURL.push(newURL.secure_url);
    console.log(imageURL);
  });

  // const imageURL = await cloudinary.uploader.upload(images);
  // console.log(await imageURL);

  const newSpace = await addSpace(
    address,
    type,
    purpose,
    fraction,
    amenities,
    additionalInfo,
    fromDate,
    toDate,
    imageURL.secure_url,
    price
  );

  res.json({ success: true, payload: newSpace });
});
