const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
      super.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING
      }, {
        sequelize
      })
    }
    static associate(models){
      this.hasMany(models.Bead, { foreignKey: 'userId', as: 'beads' });
    }
  }
  
module.exports = Users;