# Yara YaraWarehouses Documentation

This documentation provides information about the Yara Assignment Interview Task.

# Local Deployment

## Prerequisites

### Nodejs, Docker, PostgresSQL Editor (pgAdmin, DBeaver, etc..)

## Start up

- **Run Docker compose**: In the root folder open terminal (cmd, bash, etc..). Run the command: "docker-compose up -d" and wait for full initialization of all the services. Status can be checked with "docker ps" or through docker desktop UI.
- **Create and populate DB**: Open a terminal (inside dm_admin) and run the commands: "npm install", "node ./src/index.js"
- **Connect to DB**: Connect to DB using:
  ```json
  {
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "yara_assignment"
  }
  ```
