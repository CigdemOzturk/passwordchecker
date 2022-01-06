import query from "../db/connection.js";
import passwords from "../libs/passwords.js";

export async function getAllPasswords() {
  const result = await query(`SELECT * FROM passwords;`);
  return result.rows;
}

export async function getPasswordsById(id) {
  const result = await query(`SELECT * FROM passwords WHERE id = $1;`, [id]);
  return result.rows;
}

export async function getPasswordsByName(name) {
  const result = await query(
    `SELECT * FROM passwords WHERE name ILIKE '%' || $1 || '%';`,
    [name]
  );
  return result.rows;
}

// export async function createPasswords(name, password) {
//   const result = await query(
//     `INSERT INTO passwords (name, password) VALUES (&1, &2) RETURNING password`,
//     [name, password]
//   );
//   return result.rows;
// }

// CREATE A PASSWORD : should add a password to the collection and return the new password
// export async function createPasswords(password) {
//   // const newLength = recipes.push(recipe);
//   // return recipes[newLength-1];
//   passwords.push(password);
//   return passwords[passwords.length - 1];
// }
