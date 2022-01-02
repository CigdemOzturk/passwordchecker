import express from "express";
const router = express.Router();

import {
  getAllPasswords,
  getPasswordsById,
  getPasswordsByName,
} from "../models/passwords.js";

/* GET passwordss listing. */
router.get("/", async function (req, res) {
  const name = req.query.name;

  if (name) {
    const passwordsName = await getPasswordsByName(name);
    res.json({ message: `Searched names for ${name}`, payload: passwordsName });
    return;
  }

  const passwords = await getAllPasswords();

  res.json({ message: `All Passwords`, payload: passwords });
});

/*Get specific passowrd by id. */
router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const requestedPassword = await getPasswordsById(id);
  res.json({ message: `Found password ${id}`, payload: requestedPassord });
});

export default router;
