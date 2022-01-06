import query from "../../connection.js";
import passwords from "../../../libs/passwords.js";

async function populatePasswordsTable() {
  for (let i = 0; i < passwords.length; i++) {
    const name = passwords[i].name;
    const password = passwords[i].password;
    const res = await query(
      `INSERT INTO passwords (name, password) VALUES ($1, $2) RETURNING *`,
      [name, password]
    );
    console.log(res);
  }
}

populatePasswordsTable();
