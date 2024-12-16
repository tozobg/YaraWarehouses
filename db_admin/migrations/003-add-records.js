const queries = require("../scripts/002-records.js").query;

exports.up = (pgm) => {
  queries.forEach((query) => {
    pgm.sql(query);
  });
};
