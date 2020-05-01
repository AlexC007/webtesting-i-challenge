
exports.seed = function(knex) {
        return knex('item').insert([
          { name: "Player 1",
            durability:50,
            enhancement: 20
          },
          { name: "Player 2",
          durability:70,
          enhancement: 15
          }, 
          { name: "Player 3",
          durability:20,
          enhancement: 10
          },
          { name: "Player 4",
          durability:30,
          enhancement: 16
          },
      ]);
};
