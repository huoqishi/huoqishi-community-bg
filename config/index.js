const url = require('url')
const dev = require('./dev')
const prod = require('./prod')

const config = module.exports = {}

if (process.env.NODE_ENV === 'production') {
  Object.assign(config, prod)
} else {
  Object.assign(config, dev)
}

config.origin = url.format(config)
