import express from "express";
const router = express.Router();

import {
  getAllPasswords,
  getPasswordsById,
  getPasswordsByName,
  createPasswords,
} from "../models/passwords.js";

/* GET passwordss listing. */
router.get("/passwords", async function (req, res) {
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
  res.json({ message: `Found password ${id}`, payload: requestedPassword });
});

/*POSTs name and password. */
router.post("/passwords", async function (req, res) {
  const { name, password } = req.body;
  console.log("ROUTES NAME: ", name);
  const createPassword = await createPasswords(
    req.body.name,
    req.body.password
  );
  console.log("Req.body.name: ", req.body.name);
  console.log("CREATEPASWORDS IN ROUTES: ", createPassword);
  res.json({
    message: `Added ${req.body}`,
    payload: createPassword,
  });
});

export default router;
