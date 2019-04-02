exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
      tbl.string("description", 256).notNullable();
      tbl.boolean("completed");
    })
    .createTable("actions", tbl => {
      tbl.increments();

      tbl.string("notes", 128);
      tbl.string("description", 256).notNullable();
      tbl.boolean("completed");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.dropTable("projects").dropTable("actions");
};
