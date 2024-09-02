const cloneArray = require("./cloneArray");

// create clone of array
test("creates clone of array", () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(cloneArray(numbers)).toEqual(numbers);
});
