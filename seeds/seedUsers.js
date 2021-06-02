const { User } = require("../models");

const users = [
  {
    username: "user01",
    password: "password",
  },
  {
    username: "user02",
    password: "password",
  },
  {
    username: "user03",
    password: "password",
  },
];

const seedUsers = () =>
  User.bulkCreate(users, {
    individualHooks: true, // causes the beforeCreate to update even in the bulkCreate
  });

module.exports = seedUsers;
