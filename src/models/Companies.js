const { Model, DataTypes } = require('sequelize');

class Companies extends Model {
    static init(sequelize) {
      super.init({
        companyName: {
          type: DataTypes.STRING
        },
        cnpj: {
          type: DataTypes.INTEGER
        },
        telephone: {
          type: DataTypes.INTEGER
        },
        address: {
          type: DataTypes.STRING
        },
        zipCode: {
          type: DataTypes.INTEGER
        },
        number: {
          type: DataTypes.INTEGER
        }
      }, {
        sequelize
      })
    }
    static associate(models){
      this.hasMany(models.Bead, { foreignKey: 'companyID', as: 'beads' });
    }
  }
  
module.exports = Companies;