/*
 * @Author: your name
 * @Date: 2020-07-10 01:17:54
 * @LastEditTime: 2020-07-10 01:59:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\koa2_weibo\routes\index.js
 */

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: true,
    blogListDataSource: [
      {
        id: 1,
        title: "111"
      },
      {
        id: 2,
        title: "222"
      },
      {
        id: 3,
        title: "333"
      },
      {
        id: 4,
        title: "444"
      },
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'profile for ',
    userName
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { userName, pageIndex } = ctx.params
  ctx.body = {
    title: 'loadMore',
    userName,
    pageIndex
  }
})

module.exports = router
