const { Pool } = require("pg");

// Yara PG Client
const pgConString = {
  user: "postgres",
  password: "postgres",
  host: "postgres",
  port: 5432,
  database: "yara_assignment",
  max: 20,
};

const pgClient = new Pool(pgConString);

export { pgClient };
