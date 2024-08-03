const config = require('../../config');

// const GMS_QualityModel = require('./models/GMS_Quality.model');
async function applySequelizeSetup(sequelize) {
    const {
        // eslint-disable-next-line camelcase
        GMS_Customer,
        // eslint-disable-next-line camelcase
        GMS_User,
        // eslint-disable-next-line camelcase
        GMS_Quality,
        // eslint-disable-next-line camelcase
        GMS_Tags,
        // eslint-disable-next-line camelcase
        GMS_Stone,
        // eslint-disable-next-line camelcase
        GMS_Item,
    } = sequelize.models;

    if (config.environment === 'debug') {
        await sequelize.sync();
    }

    // customer with user
    GMS_Customer.belongsTo(GMS_User, { foreignKey: 'user_id' });
    GMS_User.hasMany(GMS_Customer, { foreignKey: 'user_id' });
    // item with tags
    GMS_Item.belongsTo(GMS_Tags, { foreignKey: 'tagId' });
    GMS_Tags.hasMany(GMS_Item, { foreignKey: 'tagId' });
    // item with quality
    GMS_Item.belongsTo(GMS_Quality, { foreignKey: 'qualityId' });
    GMS_Quality.hasMany(GMS_Item, { foreignKey: 'qualityId' });
    // item with stone
    GMS_Item.belongsTo(GMS_Stone, { foreignKey: 'stoneid' });
    GMS_Stone.hasMany(GMS_Item, { foreignKey: 'stoneid' });
}

module.exports = { applySequelizeSetup };
