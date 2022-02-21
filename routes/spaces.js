import express from "express";
import {
  getAllSpaces,
  getSpaceByID,
  getSpaceBySearch,
} from "../models/spaces.js";

const router = express.Router();

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
