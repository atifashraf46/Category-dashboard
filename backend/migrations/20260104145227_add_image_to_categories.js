exports.up = function (knex) {
  return knex.schema.table("categories", function (table) {
    table.string("image");
  });
};

exports.down = function (knex) {
  return knex.schema.table("categories", function (table) {
    table.dropColumn("image");
  });
};