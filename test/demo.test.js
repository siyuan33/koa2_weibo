/**
 * 测试demo
 */
function sum (a, b) {
  return a + b
}


test("test demo 1", () => {
  const result = sum(1, 2)
  expect(result).not.toBe(4)
})