exports.success = function (result = null) {
  return {
    code: 0,
    msg: 'ok',
    result
  }
}
exports.error = function () {
  return {
    code: 1005,
    msg: '服务器操作异常'
  }
}
