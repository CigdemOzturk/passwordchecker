import query from "../../connection.js";
import { passwords } from "../../../public/js/main.js";

async function populatePasswordsTable() {
  const passwordsArray = passwords();
  for (let i = 0; i < passwordsArray.length; i++) {
    const name = passwordsArray[i].name;
    const password = passwordsArray[i].password;
    const res = await query(
      `INSERT INTO passwords (name, password) VALUES (&1, &2) RETURNING pasword`,
      [name, password]
    );
    console.log(res);
  }
}

populatePasswordsTable();
