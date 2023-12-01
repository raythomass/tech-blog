const sequelize = require('../config/connection');
const seedPosts = require('./post')
const seedUsers = require('./post')

const seed = async() => {
    await sequelize.sync({force:true});
    await seedPosts();
    await seedUsers();
};

seed();

