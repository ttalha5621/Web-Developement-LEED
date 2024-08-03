// const { Sequelize } = require('sequelize');

const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;

module.exports = (sequelize) => {
    sequelize.define('GMS_Customer', {
        id: {
            type: DataType.UUID,
            allowNull: false,
            // defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },

        bank_account_no: {
            type: DataType.TEXT,
            allowNull: true,
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: false,
        },

        user_id: {
            // foreign key for user
            type: DataType.UUID,
            // required: true,
            allowNull: true,
            references: {
                model: 'GMS_User',
                key: 'id',
            },
        },
    }, {
        sequelize,
        tableName: 'GMS_Customer',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'GMS_Customer_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
            {
                name: 'fki_user_id_fk',
                fields: [
                    { name: 'user_id' },
                ],
            },
        ],
    });
};
