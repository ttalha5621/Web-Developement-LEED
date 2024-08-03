require('dotenv').config();

// debug: true or false should be remove or null for production.
// const result = dotenv.config({ debug: true, override: true });

const port = process.env.APIPORT || 5000;
module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.APIPORT || 5000,
    origin: process.env.ORIGIN || `http://localhost:${port}`,
    logPath: process.env.LOG_PATH,
    authSecret: process.env.JWT_SECRET,
    tokenExpiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
    levelOnePermission: process.env.LEVEL_ONE_PERMISSION,
    levelTwoPermission: process.env.LEVEL_TWO_PERMISSION,
    levelThreePermission: process.env.LEVEL_THREE_PERMISSION,
    dbconfig: {
        HOST: process.env.HOST,
        USER: process.env.DBUSER,
        PASSWORD: process.env.DBPASSWORD,
        PORT: process.env.DBPORT,
        DB: process.env.DB,
        SCHEMA: process.env.SCHEMA,
        REDISHOST: process.env.HOST,
        REDISPORT: process.env.REDISPORT,
        REDISPASSWORD: process.env.REDISPASSWORD,
    },

};
