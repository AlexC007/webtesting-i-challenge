
exports.up = function(knex) {
  return knex.schema.createTable('item', function(item){
      item.increments();
      item.string('name', 100).notNullable();
      item.integer('durability').notNullable();
      item.integer('enhancement').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item');
};
