module.exports = {
  port: 3000,
  hostname: 'localhost',
  protocol: 'http',
  issuer: 'huoqishi',
  audience: 'huoqishi',
  expires: '1h',
  // origin
  // 数据库配置
  db: {
    dbname: 'community',
    username: 'root',
    password: ''
  }
}
