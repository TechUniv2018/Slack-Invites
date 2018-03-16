

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('recipients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    invite_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    response: {
      type: Sequelize.STRING,
      default: 'Pending',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('recipients'),
};
