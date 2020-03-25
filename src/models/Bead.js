const { Model, DataTypes } = require('sequelize');

class Bead extends Model {
    static init(sequelize) {
      super.init({
        reference: DataTypes.STRING,
        value: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        patch: DataTypes.STRING,
        dateEntry: DataTypes.DATEONLY,
      }, {
        sequelize
      })
    }
    static associate(models){
      this.belongsTo(models.Companies, { foreignKey: 'companyID', as: 'companies' });

    }
  }
  
module.exports = Bead;