const Sequelize = require('sequelize')
const sequelize = require('./db')
const Article = sequelize.define('articles', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1
  },
  title: {
    type: Sequelize.STRING,
    'unique': true
  },
  type: {
    type: Sequelize.UUID
  },
  content: {
    type: Sequelize.TEXT
  },
  isdel: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  // 不使用 (updatedAt, createdAt) 这两个属性
  // timestamps: false
})
Article.sync({ force: false }).then((arg, arg2) => {

})
module.exports = Article
