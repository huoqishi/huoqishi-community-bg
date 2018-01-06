/**
 * 文章操作
 */
const path = require('path')
const multer = require('multer')
const Article = require('../models/Article')
const status = require('../common/status.js')

const upload = multer({
  dest: path.join(__dirname, '../uploads')
})

/**
 * 上传文章图片
 */
exports.postArticlesImages = [upload.single('cover'), (req, res, next) => {

}]
/**
 * 获取文章列表
 */
exports.getArticles = (req, res, next) => {
  let {page = 1, count = 10} = req.query
  page = parseInt(page) || 1
  count = parseInt(count) || 10
  Article.findAndCountAll({
    limit: count,
    offset: (page - 1) * count,
    where: { isdel: false }
  }).then(articles => {
    const body = status.success(articles.rows)
    body.total = articles.count
    res.send(body)
  }, next)
}

/**
 * 获取文章详细内容
 */
exports.getArticlesDetail = async (req, res) => {
  const {id} = req.params
  const article = await Article.findOne({
    where: {id}
  })
  res.send(status.success(article))
}
/**
 * 添加一篇文章
 */
exports.postArticles = async (req, res) => {
  const {title, content} = req.body
  console.log(title, content)
  const result = await Article.create({title, content})
  res.send(status.success())
}
exports.delArticles = (req, res) => {
}
exports.patchArticles = (req, res) => {
}
exports.putArticles = (req, res) => {
}
