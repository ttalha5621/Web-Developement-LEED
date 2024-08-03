const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_Stones', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit: {
      type: DataTypes.ARRAY(DataTypes.CHAR),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GMS_Stones',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "Stones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
