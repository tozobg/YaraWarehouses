// const { Pool } = require('pg');

// // Yara PG Client
// const pgConString = {
//     user: "postgres",
//     password: "postgres",
//     host: "postgres",
//     port: 5432,
//     database: 'yara_assignment',
//     max: 20
// };

// const pgClient = new Pool(pgConString);

// module.exports = { pgClient };

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const warehouses = [
  {
    name: "Warehouse A",
    size: 10,
  },
  {
    name: "Warehouse B",
    size: 100,
  },
];

export { books, warehouses };
