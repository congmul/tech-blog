const { Post } = require("../models");

const postData = [
  {
    title: "Test post01 for user01",
    body: "post01",
    userId: 1,
  },
  {
    title: "Test post02 for user01",
    body: "post02",
    userId: 1,
  },
  {
    title: "Test post03 for user02",
    body: "post03",
    userId: 2,
  },
  {
    title: "Test post02 for user02",
    body: "post04",
    userId: 2,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
