const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
      super.init({
        email:{ 
         type: DataTypes.STRING,
          validate: {
            isEmail: {
              msg: "E-mail é necessario"
            }
          }},
        password:{
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              message: 'Senha requerida'
            }
          }
        },  
        name: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              message: 'Nome requerida'
            }
          }
        }
      }, {
        sequelize
      })
    }
    static associate(models){
      this.hasMany(models.Bead, { foreignKey: 'userId', as: 'beads' });
    }
  }
  
module.exports = Users;