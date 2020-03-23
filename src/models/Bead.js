const { Model, DataTypes } = require('sequelize');

class Bead extends Model {
    static init(sequelize) {
      super.init({
        reference: DataTypes.STRING,
        value: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        patch: DataTypes.STRING,
      }, {
        sequelize
      })
    }
    static associate(models){
      this.hasMany(models.Companies, { foreignKey: 'companyTalaoId', as: 'companies' });
    }
  }
  
module.exports = Bead;