const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_Quality', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GMS_Quality',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "GMS_Quality_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
