const { Client } = require("pg");
const runner = require("node-pg-migrate").default;

async function runMigrations() {
  const dbName = "yara_assignment";

  // Initial(default) connection string
  const conString = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: "5432",
    database: "postgres",
  };

  // Create yara_assignment database
  let client = new Client(conString);
  try {
    await client.connect();
    await client.query(`create database ${dbName}`);
    await client.end();
  } catch (e) {}

  try {
    // Change database in connectiong string
    conString.database = dbName;
    client = new Client(conString);

    await client.connect();

    // Execute migrations
    const migrateOptions = {
      dbClient: client,
      dir: "./migrations",
      direction: "up",
      migrationsTable: "migrations",
    };

    await runner(migrateOptions);
  } catch (e) {
    console.log(e);
  }

  await client.end();
}

// Create DB and Execute migrations
runMigrations().then(() => {
  process.exit();
});
