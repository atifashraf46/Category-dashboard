const db = require("../config/db");

db.schema.hasTable("users").then((exists) => {
  if (!exists) {
    return db.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("email").unique();
      table.string("password");
    });
  }
});

module.exports = db;