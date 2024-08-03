const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_Rate', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GMS_Rate',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "GMS_Rate_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
