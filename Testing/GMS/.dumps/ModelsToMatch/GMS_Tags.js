const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_Tags', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    QrCode: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GMS_Tags',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "GMS_Tags_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
