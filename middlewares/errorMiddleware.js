const status = require('../common/status')
module.exports = function (err, req, res, next) {
  console.log(err)
  res.send(status.error(err))
}
