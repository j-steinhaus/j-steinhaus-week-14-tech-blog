const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model { }

Comment.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'post',
      key: 'id'
    }
  },
  comment_text: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },

}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment'
})


module.exports = Comment;
