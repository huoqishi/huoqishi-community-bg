const express = require('express')
const middleware = require('./middlewares')
const app = express()
middleware(app)
app.listen(3000, '127.0.0.1', err => {
  if (err) return console.log('出错了', err)
  console.log('调动成功: http://127.0.0.1:3000')
})
process.on('uncaughtException', function (err) {
  console.error('An uncaught error occurred!')
  console.error(err.stack)
})
