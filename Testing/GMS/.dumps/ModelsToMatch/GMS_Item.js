const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_Item', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    qualityId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'GMS_Quality',
        key: 'id'
      }
    },
    stoneid: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'GMS_Stones',
        key: 'id'
      }
    },
    laborcost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    polishpercent: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    manufacturingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tagId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'GMS_Tags',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'GMS_Item',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "GMS_Item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "Item_Stone_FK_Index",
        fields: [
          { name: "stoneid" },
        ]
      },
      {
        name: "fki_Item_Quality_FK",
        fields: [
          { name: "qualityId" },
        ]
      },
      {
        name: "fki_Item_Tag_Fk",
        fields: [
          { name: "tagId" },
        ]
      },
    ]
  });
};
