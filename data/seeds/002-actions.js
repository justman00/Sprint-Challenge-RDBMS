exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    { notes: "notes1", description: "p_desc1", completed: true, project_id: 1 },
    {
      notes: "notes2",
      description: "p_desc2",
      completed: false,
      project_id: 2
    },
    { notes: "notes3", description: "p_desc3", completed: true, project_id: 3 }
  ]);
};
