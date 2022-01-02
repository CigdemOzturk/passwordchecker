import pg from "pg";
import * as db from "../config.js";

const pool = new pg.Pool({
  user: db.databaseUsername,
  host: db.databaseHost,
  password: db.databasePassword,
  database: db.databaseName,
  port: db.databasePort,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  //exporting pool.query method so we can use it elsewhere
  return pool.query(text, params);
  //returns a promise unless we're using a callback(ans we're not!)
}
