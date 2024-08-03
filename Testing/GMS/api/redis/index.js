const redis = require('redis');

const config = require('../../config');

const dbConfig = config.dbconfig;

const client = redis.createClient({
    port: dbConfig.REDISPORT,
    host: dbConfig.REDISHOST,
    password: dbConfig.REDISPASSWORD,
});

client.on('connect', () => {
    console.log('Connected to Redis');
});
client.on('error', (err) => {
    console.log(`Error! ${err}`);
});

module.exports = client;
