

module.exports = (sequelize, DataTypes) => {
  const recipients = sequelize.define('recipients', {
    user_id: DataTypes.STRING,
    invite_id: DataTypes.STRING,
    response: DataTypes.STRING,
  }, {});
  recipients.associate = function (models) {
    // associations can be defined here
  };
  return recipients;
};
