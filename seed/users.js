const db = require("../db");
const User = require("../models/user");
const faker = require("faker");
// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const main = async () => {
  const users = [...Array(40)].map((user) => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    items: [
      {
        title: faker.lorem.sentence(),
        link: faker.internet.url(),
      },
      {
        title: faker.lorem.sentence(),
        link: faker.internet.url(),
      },
      {
        title: faker.lorem.sentence(),
        link: faker.internet.url(),
      },
    ],
  }));
  const allUser = await User.insertMany(users);
  console.log("created some users", allUser);
};
const run = async () => {
  await main();
  db.close();
};
run();
