// const { Sequelize } = require('sequelize');

const DataType = require('sequelize');
// const dbConfig = require('../../../config').dbconfig;
module.exports = (sequelize) => {
    sequelize.define('GMS_Item', {
        id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataType.TEXT,
            allowNull: false,
        },
        qualityId: {
            // foreign key for quality
            type: DataType.UUID,
            allowNull: true,
            references: {
                model: 'GMS_Quality',
                key: 'id',
            },
        },
        stoneid: {
            // foreign key for Quality
            type: DataType.UUID,
            allowNull: true,
            references: {
                model: 'GMS_Stone',
                key: 'id',
            },
        },
        laborcost: {
            type: DataType.DOUBLE,
            allowNull: true,
        },
        polishpercent: {
            type: DataType.DOUBLE,
            allowNull: true,
        },
        manufacturingCost: {
            type: DataType.DOUBLE,
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
        weight: {
            type: DataType.DOUBLE,
            allowNull: true,
        },
        tagId: {
            // foreign key for quality
            type: DataType.UUID,
            allowNull: true,
            references: {
                model: 'GMS_Tags',
                key: 'id',
            },
        },
    }, {
        sequelize,
        tableName: 'GMS_Item',
        schema: 'GMS',
        timestamps: true,
        indexes: [
            {
                name: 'GMS_Item_pkey',
                unique: true,
                fields: [
                    { name: 'id' },
                ],
            },
            {
                name: 'Item_Stone_FK_Index',
                fields: [
                    { name: 'stoneid' },
                ],
            },
            {
                name: 'fki_Item_Quality_FK',
                fields: [
                    { name: 'qualityId' },
                ],
            },
            {
                name: 'fki_Item_Tag_Fk',
                fields: [
                    { name: 'tagId' },
                ],
            },
        ],
    });
};
