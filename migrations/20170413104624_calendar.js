
exports.up = function(knex, Promise) {
  return knex.schema.createTable('calendar', function (table) {
    table.increments('id').primary()
    table.integer('flat_id')
    table.date('date')
    table.string('event')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('calendar')
};
