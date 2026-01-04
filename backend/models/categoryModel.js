const db = require("../config/db");

db.schema.hasTable("categories").then(async (exists) => {
  if (!exists) {
    await db.schema.createTable("categories", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("description");
      table.string("image");
      table.integer("itemCount").defaultTo(0);
    });
  } else {
    const hasImage = await db.schema.hasColumn("categories", "image");
    if (!hasImage) {
      await db.schema.alterTable("categories", (table) => {
        table.string("image");
      });
    }

    const hasItemCount = await db.schema.hasColumn("categories", "itemCount");
    if (!hasItemCount) {
      await db.schema.alterTable("categories", (table) => {
        table.integer("itemCount").defaultTo(0);
      });
    }
  }
});

module.exports = db;