const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_Customer', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    bank_account_no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'GMS_User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'GMS_Customer',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "GMS_Customer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fki_user_id_fk",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
