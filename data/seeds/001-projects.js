exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    { name: "project1", description: "p_desc1", completed: false },
    { name: "project2", description: "p_desc2", completed: true },
    { name: "project3", description: "p_desc3", completed: false }
  ]);
};
