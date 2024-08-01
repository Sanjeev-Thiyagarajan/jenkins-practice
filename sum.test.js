const sum = require("./math");

test("adds 1+2 t equal3", () => {
  expect(sum(1, 2)).toBe(3);
});
