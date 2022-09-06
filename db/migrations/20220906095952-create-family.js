module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Families', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grannyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Grannies',
          key: 'id',
        },
      },
      grandChildId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'GrandChildren',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Families');
  },
};
