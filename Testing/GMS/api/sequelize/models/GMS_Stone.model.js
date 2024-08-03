// const { Sequelize } = require('sequelize');
const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;
module.exports = (sequelize) => {
    sequelize.define('GMS_Stone', {
        id: {
            type: DataType.UUID,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataType.TEXT,
            allowNull: false,
        },
        weight: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        unit: {
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
        tableName: 'GMS_Stones',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'Stones_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
        ],
    });
};
