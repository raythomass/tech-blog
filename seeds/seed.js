const sequelize = require('../config/connection');
const seedPosts = require('./post')
const seedUsers = require('./user')

const seed = async() => {
    await sequelize.sync({force:true});
    // await seedPosts();
    await seedUsers();
};

seed();

