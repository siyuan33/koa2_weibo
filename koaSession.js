const koaSession = require('koa-generic-session');
//redis
const redisStore = require('koa-redis');
const { REDIS_CONF } = require('./src/redisConf/db.js');

const timeOut = 24 * 60 * 60 * 1000

module.exports = koaSession({
  key: "weibo.sid",    // cookie name 默认是 "koa.sid"
  prefix: "weibo:sess:",  // redis key 的前缀 默认是 koa:sess:
  cookie: {
    path: "/",
    httpOnly: true,    // 只允许服务端去修改 不允许 客户端修改
    maxAge: timeOut
  },
  ttl: timeOut,   // redis 过期时间
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
})


