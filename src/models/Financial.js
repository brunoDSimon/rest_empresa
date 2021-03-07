const { Model, DataTypes } = require('sequelize');
class Financial extends Model {
    static init(sequelize) {
      super.init({
        description: DataTypes.STRING,
        value: DataTypes.DOUBLE,
        rate: DataTypes.DOUBLE,
        portion: DataTypes.INTEGER,
        dateEntry: DataTypes.DATEONLY,
        status: DataTypes.STRING,
        base64: DataTypes.STRING
      }, {
        sequelize
      })
    }
    static associate(models){
        this.belongsTo(models.Users, { foreignKey: 'userID', as: 'users' });
    }
  }
  
module.exports = Financial;