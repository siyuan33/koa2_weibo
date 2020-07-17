/**
 * @des  连接 redis 的方法  get  set
 */

const redis = require('redis');
const { REDIS_CONF } = require('../redisConf/db.js');
//  const {isProd}  =require("../utils/env.js")

// 创建客户端

const redisClient = redis.createClient(
  REDIS_CONF.port,
  REDIS_CONF.host
)

redisClient.on("err", err => console.log(err))

/**
 * @description: 
 * @param {string}  key 键
 * @param {string}  value 值
 * @param {number}  timeout 过期时间
 * @return: 
 */
function set (key, value, timeout = 60 * 60) {
  if (typeof (value) === "object") {
    value = JSON.stringify(value)
  }
  redisClient.set(key, value)
  redisClient.expire(key, timeout)
}
/**
 * @description: 
 * @param {string}  key
 * @return: redis value from a key
 */
function get (key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, value) => {
      if (err) {
        reject(err)
        return
      }
      if (value === null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(value))
      }
      catch (JSON_parseErr) {
        reject(value)
      }
    })
  })
}



module.exports = { set, get }