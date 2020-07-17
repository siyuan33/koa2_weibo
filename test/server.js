/** 
 * jest server
 */
const supertest = require('supertest');  // 能向传入的后端服务发送请求
const server = require('../app.js').callback()

module.exports = supertest(server)