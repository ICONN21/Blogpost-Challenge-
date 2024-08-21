const { User } = require('../models');

const userData = [
  {
    username: 'tech_guru',
    password: 'password123',
  },
  {
    username: 'code_master',
    password: 'password123',
  },
  {
    username: 'dev_dude',
    password: 'password123',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
