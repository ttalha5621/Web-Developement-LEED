const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMS_User', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contact_no: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GMS_User',
    schema: 'GMS',
    timestamps: true,
    indexes: [
      {
        name: "GMS_User_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
