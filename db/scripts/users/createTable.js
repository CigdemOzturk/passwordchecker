import query from "../../connection.js";

const response = `CREATE TABLE IF NOT EXISTS passwords (id SERIAL PRIMARY KEY, name TEXT, password TEXT)`;

//const responsee = `DROP TABLE passwords`;

console.log(response);

async function createPasswordsTable() {
  const res = await query(response);

  console.log("Table Created!", res);
}

createPasswordsTable();
