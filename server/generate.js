let faker = require('faker');

let database = { characters: []};

for (let i = 1; i < 51; i++) {
  database.characters.push({
    id: i,
    title: faker.name.findName(),
    description: faker.lorem.sentences(),
    published: faker.datatype.boolean(),
  });

}

console.log(JSON.stringify(database));
