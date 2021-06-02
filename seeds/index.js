const connection = require("../config/connection");
const seedUsers = require("./seedUsers");
const seedPosts = require("./seedPosts");
const seedComments = require("./seedComments");

const seedAll = async () => {
  await connection.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
