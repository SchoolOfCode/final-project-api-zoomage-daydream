import express from "express";
import {
  addUser,
  getAllUsers,
  getUserByID,
  getUserByEmail,
} from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const { email } = req.query;
  console.log(email);
  if (email !== undefined) {
    const user = await getUserByEmail(email);
    res.json({
      success: true,
      payload: user,
    });
  } else {
    const users = await getAllUsers();

    res.json({
      success: true,
      payload: users,
    });
  }
});

// Get user by id
router.get("/:id", async function (req, res, next) {
  const id = Number(req.params.id);
  const user = await getUserByID(id);

  res.json({
    success: true,
    payload: user,
  });
});

// Get user by email
// router.get("/", async function (req, res, next) {
//   const { email } = req.query;
//   console.log(email);
//   const user = await getUserByEmail(email);

//   res.json({
//     success: true,
//     payload: user,
//   });
// });

router.post("/", async function (req, res, next) {
  const { full_name, username, email, date_of_birth } = req.body;

  const newUser = await addUser(full_name, username, email, date_of_birth);

  res.json({ success: true, payload: newUser });
});

export default router;
