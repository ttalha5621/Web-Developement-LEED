// const { Sequelize } = require('sequelize');
const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;

module.exports = (sequelize) => {
    sequelize.define('GMS_Quality', {
        id: {
            type: DataType.UUID,
            allowNull: false,
            // defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataType.TEXT,
            allowNull: false,
            // validate: {
            //     is: {
            //         args: /^([A-Za-z0-9]+([\s][A-Za-z0-9]+)*)$/g,
            //         msg: "Invalid input for string type"
            //     }
            // }
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
        tableName: 'GMS_Quality',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'GMS_Quality_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
        ],
    });
};
