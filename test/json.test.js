/**
 * json test
 */

const server = require("./server.js")

test("json 接口返回函数格式正确", async () => {
  const res = await server.get("/json")
  const { body } = res
  expect(body).toEqual({
    title: 'koa2 json'
  })
  expect(body.title).toBe("koa2 json")
})