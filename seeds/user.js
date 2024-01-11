const { User } = require('../models')

const userData = [
    {
    id: 1,
    username: 'ray',
    password: 'raypassword'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;