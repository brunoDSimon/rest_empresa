'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: { model: 'companies', key: 'id'},
        onUpdate:'CASCADE',
        onDelete: 'CASCADE'
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      patch: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateEntry: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('beads')
  }
};
