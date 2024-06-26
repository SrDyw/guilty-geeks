import { Pool } from "pg";
import { db_config } from "./config.database";

const createPool = (config) => {
  return new Pool(config);
};

export const secureQuery = async (query, values = []) => {
  const pool = createPool(db_config);
  const response = await pool.query(query, values);
  pool.end();
  return response;
};
