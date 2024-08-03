// const { Sequelize } = require('sequelize');
const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;

module.exports = (sequelize) => {
    sequelize.define('GMS_User', {
        id: {
            type: DataType.UUID,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },

        first_name: {
            type: DataType.TEXT,
            allowNull: false,
            // validate: {
            //     is: {
            //         args: /^([A-Za-z0-9]+([\s][A-Za-z0-9]+)*)$/g,
            //         msg: "Invalid input for string type"
            //     }
            // }
        },

        last_name: {
            type: DataType.TEXT,
            allowNull: true,
            // validate: {
            //     is: {
            //         args: /^([A-Za-z0-9]+([\s][A-Za-z0-9]+)*)$/g,
            //         msg: "Invalid input for string type"
            //     }
            // }
        },

        email: {
            type: DataType.TEXT,
            allowNull: false,
            // validate: {
            //     isEmail: {
            //         require: true,
            //         args: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            //         msg: "Invalid input for email type"
            //     }
            // }
        },

        contact_no: {
            type: DataType.TEXT,
            allowNull: false,
            // validate: {
            //     is: {
            //         args: /^[0-9]{7,15}$/,
            //         msg: "Invalid input for integer type"
            //     }
            // }
        },

        user_type: {
            type: DataType.INTEGER,
            allowNull: false,
            // validate: {
            //     isInt: {
            //         max: 4,
            //         min: 0,
            //         msg: "Invalid input for integer type, expected 0-4"
            //     }
            // }
        },

        password: {
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
        tableName: 'GMS_User',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'GMS_User_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
        ],
    });
};
