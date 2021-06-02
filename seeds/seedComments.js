const { Comment } = require("../models");

const commentData = [
  {
    body: "Test Comment01",
    created_at: new Date(2021, 4, 27, 15, 05, 12, 0),
    userId: 1,
    postId: 1,
  },
  {
    body: "Test Comment02",
    created_at: new Date(2021, 4, 28, 14, 05, 12, 0),
    userId: 1,
    postId: 1,
  },
  {
    body: "Test Comment03",
    created_at: new Date(2021, 4, 28, 14, 05, 12, 0),
    userId: 1,
    postId: 2,
  },
  {
    body: "Test Comment04",
    created_at: new Date(2021, 4, 28, 15, 05, 12, 0),
    userId: 2,
    postId: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
