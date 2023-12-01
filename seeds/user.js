const { User } = require('../models')

const userData = [
    {
    id: 1,
    email: 'test@test.com',
    username: 'ray',
    password: 'raypassword'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;