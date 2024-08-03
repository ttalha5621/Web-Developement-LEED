'user strict';

const { Sequelize } = require('sequelize');
// const util = require('util');
const config = require('../../config');

const dbConfig = config.dbconfig;
const { applySequelizeSetup } = require('./extra-setup');
// const { logger, Logger } = require('../../services/logger');

// async function withTransaction(db, callback) {
//     try {
//         await db.beginTransaction();
//         await callback();
//         await db.commit();
//     } catch (err) {
//         await db.rollback();
//         throw err;
//     } finally {
//         await db.close();
//     }
// }

// // eslint-disable-next-line no-shadow
// function makeDb(dbConfig, res) {
//     const connection = new Sequelize(`postgres://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`);
//     connection.authenticate()
//         .then(() => connection)
//         .catch((error) => {
//             console.error(`error connecting: ${error.stack}`);

//             if (error.code === 'ECONNREFUSED') {
//                 const errorMessage = '';
//                 errorMessage.message = 'Something went wrong with the database connection';
//                 // eslint-disable-next-line no-restricted-globals
//                 return res.status(status.error).send(errorMessage);
//             }
//             const errorMessage = '';
//             errorMessage.message = 'Something went wrong with the database query';
//             // eslint-disable-next-line no-restricted-globals
//             return res.status(status.error).send(errorMessage);
//         });

//     return {
//         // eslint-disable-next-line no-restricted-syntax
//         query(sql, args) {
//             if (process.env.NODE_ENV === 'development') {
//                 // console.log("sql ", sql);
//                 console.log(sql);
//                 if (args) {
//                     // console.log("args ", args);
//                     console.log(args);
//                 }
//             }
//             return util.promisify(connection.query).call(connection, sql, args);
//         },
//         // eslint-disable-next-line no-restricted-syntax
//         close() {
//             return util.promisify(connection.end).call(connection);
//         },
//     };
// }

// const db = {
//     dbConfig,
//     makeDb,
//     withTransaction,
// };

const sequelize = new Sequelize(`postgres://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    {
        pool: {
            max: 50,
            min: 0,
            idle: 1000,
        },
        // disable logging; default: console.log
        // logging: sql => logger.info(sql)
    });
const modelDefiners = [
    // eslint-disable-next-line global-require
    require('./models/GMS_Customer.model'),
    // eslint-disable-next-line global-require
    require('./models/GMS_Rate.model'),
    // eslint-disable-next-line global-require
    require('./models/GMS_User.model'),
    // eslint-disable-next-line global-require
    require('./models/GMS_Quality.model'),
    // eslint-disable-next-line global-require
    require('./models/GMS_Tags.model'),
    // eslint-disable-next-line global-require
    require('./models/GMS_Item.model'),
    // eslint-disable-next-line global-require
    require('./models/GMS_Stone.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applySequelizeSetup(sequelize);

module.exports = sequelize;
