var DataTypes = require("sequelize").DataTypes;
var _GMS_Customer = require("./GMS_Customer");
var _GMS_Item = require("./GMS_Item");
var _GMS_Quality = require("./GMS_Quality");
var _GMS_Rate = require("./GMS_Rate");
var _GMS_Stones = require("./GMS_Stones");
var _GMS_Tags = require("./GMS_Tags");
var _GMS_User = require("./GMS_User");

function initModels(sequelize) {
  var GMS_Customer = _GMS_Customer(sequelize, DataTypes);
  var GMS_Item = _GMS_Item(sequelize, DataTypes);
  var GMS_Quality = _GMS_Quality(sequelize, DataTypes);
  var GMS_Rate = _GMS_Rate(sequelize, DataTypes);
  var GMS_Stones = _GMS_Stones(sequelize, DataTypes);
  var GMS_Tags = _GMS_Tags(sequelize, DataTypes);
  var GMS_User = _GMS_User(sequelize, DataTypes);

  GMS_Customer.belongsTo(GMS_User, { foreignKey: "user_id"});
  GMS_User.hasMany(GMS_Customer, { foreignKey: "user_id"});
  GMS_Item.belongsTo(GMS_Quality, { foreignKey: "qualityId"});
  GMS_Quality.hasMany(GMS_Item, { foreignKey: "qualityId"});
  GMS_Item.belongsTo(GMS_Stones, { foreignKey: "stoneid"});
  GMS_Stones.hasMany(GMS_Item, { foreignKey: "stoneid"});
  GMS_Item.belongsTo(GMS_Tags, { foreignKey: "tagId"});
  GMS_Tags.hasMany(GMS_Item, { foreignKey: "tagId"});

  return {
    GMS_Customer,
    GMS_Item,
    GMS_Quality,
    GMS_Rate,
    GMS_Stones,
    GMS_Tags,
    GMS_User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
