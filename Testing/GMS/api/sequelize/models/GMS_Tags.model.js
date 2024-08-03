// const { Sequelize } = require('sequelize');
const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;
module.exports = (sequelize) => {
    sequelize.define('GMS_Tags', {
        id: {
            type: DataType.UUID,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        QrCode: {
            type: DataType.TEXT,
            allowNull: false,
        },

        createdAt: {
            type: DataType.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'GMS_Tags',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'GMS_Tags_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
        ],
    });
};
