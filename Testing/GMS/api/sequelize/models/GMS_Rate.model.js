// const { Sequelize } = require('sequelize');
const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;

module.exports = (sequelize) => {
    sequelize.define('GMS_Rate', {
        id: {
            type: DataType.UUID,
            // defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        quantity: {
            type: DataType.INTEGER,
            allowNull: false,
            // validate: {
            //     isInt: {
            //         msg: "Invalid input for integer type, expected 0-4"
            //     }
            // }
        },

        unit: {
            type: DataType.TEXT,
            allowNull: false,
            // validate: {
            //     is: {
            //         args: /^([A-Za-z0-9]+([\s][A-Za-z0-9]+)*)$/g,
            //         msg: "Invalid input for string type"
            //     }
            // }
        },

        price: {
            type: DataType.INTEGER,
            allowNull: false,
            // validate: {
            //     isInt: {
            //         msg: "Invalid input for integer type, expected 0-4"
            //     }
            // }
        },

        date: {
            type: DataType.DATEONLY,
            allowNull: false,
            // validate: {
            //     isDate: {
            //         //args: /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/,
            //         msg: "Invalid input for date time type, format YYYY-MM-DD hh:mm:ss"
            //     }
            // }
        },

    }, {
        sequelize,
        tableName: 'GMS_Rate',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'GMS_Rate_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
        ],
    });
};
