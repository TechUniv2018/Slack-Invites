

module.exports = (sequelize, DataTypes) => {
  const invites = sequelize.define('invites', {
    name: {
      Type: DataTypes.STRING,
    },
    event_id: {
      Type: DataTypes.STRING,
      unique: true,
    },
    type: {
      Type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      Type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      Type: DataTypes.DATE,
    },
    venue: {
      Type: DataTypes.STRING,
      allowNull: false,

    },
    owner: {
      Type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
  }, {});
  invites.associate = function (models) {
    // associations can be defined here
  };
  return invites;
};
