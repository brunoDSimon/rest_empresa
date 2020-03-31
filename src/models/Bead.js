const { Model, DataTypes } = require('sequelize');

class Bead extends Model {
    static init(sequelize) {
      super.init({
        reference: DataTypes.STRING,
        value: DataTypes.DOUBLE,
        amount: DataTypes.INTEGER,
        patch: DataTypes.STRING,
        dateEntry: DataTypes.DATEONLY,
      }, {
        sequelize
      })
    }
    static associate(models){
      this.belongsTo(models.Companies, { foreignKey: 'companyID', as: 'companies' });
      this.belongsTo(models.Users, { foreignKey: 'userID', as: 'users' });

    }
  }
  
module.exports = Bead;