const { Model, DataTypes } = require('sequelize');

class Companies extends Model {
    static init(sequelize) {
      super.init({
        companyName: DataTypes.STRING,
        cnpj: DataTypes.INTEGER,
        telephone: DataTypes.INTEGER,
        address: DataTypes.STRING,
        zipCode: DataTypes.INTEGER,
        number: DataTypes.INTEGER
      }, {
        sequelize
      })
    }
    static associate(models){
      this.hasMany(models.Bead, { foreignKey: 'companyTalaoId', as: 'beads' });
    }
  }
  
module.exports = Companies;