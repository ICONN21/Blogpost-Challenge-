const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Great article, really helped me understand closures!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Hooks have completely changed how I write React apps.',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'Node.js is awesome, I love its non-blocking architecture!',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
