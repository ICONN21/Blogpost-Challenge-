const { Post } = require('../models');

const postData = [
  {
    title: 'Understanding JavaScript Closures',
    content: 'Closures are an important concept in JavaScript...',
    user_id: 1,
  },
  {
    title: 'Introduction to React Hooks',
    content: 'React Hooks allow you to use state and other React features...',
    user_id: 2,
  },
  {
    title: 'Getting Started with Node.js',
    content: 'Node.js is a powerful platform built on Chrome\'s JavaScript runtime...',
    user_id: 3,
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
