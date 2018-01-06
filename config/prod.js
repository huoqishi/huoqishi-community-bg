module.exports = {
  port: 8091,
  hostname: 'community.huoqishi.net',
  protocol: 'http',
  issuer: 'huoqishi',
  audience: 'huoqishi',
  expires: '1h',
  // origin
  // 数据库配置
  db: {
    dbname: 'qs',
    username: 'root',
    password: ''
  }
}
