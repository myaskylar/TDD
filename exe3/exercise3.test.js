const cloneArr = require("./exercise3");

test("return duplicate of array", () => {
  const array = [1, 2, 3];
  expect(cloneArr(array)).toEqual(array);
  expect(cloneArr(array)).not.toBe(array);
});
