const path = require('path')
const express = require('express')
const router = require('../routes')
const bodyParser = require('body-parser')
const jsonwebtoken = require('./jsonwebtoken')
const errorMiddleware = require('./errorMiddleware')

module.exports = function middleware (app) {
  app.use(express.static(path.join(__dirname, '../uploads')))
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
  app.use(jsonwebtoken.verfyToken)
  app.use(router)
  app.use(errorMiddleware)
}
