exports.up = knex => {
  return knex.schema.createTable('students', (table) => {
    table.increments() // auto-incrementing id column
      .index(); // index this column

    table.string('name', 15) // maximum length of 15 characters
      .unique() // add a unique constraint to this column
      .notNullable(); // add a not-null constraint to this column
    
    table.string('status')
      .notNullable(); // add a not-null constraint to this column

    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = knex => {
  return knex.schema.dropTable('students');
};
