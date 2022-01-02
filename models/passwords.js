import { query } from "../db/connection.js";

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