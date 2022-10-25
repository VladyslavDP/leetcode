const longestConsecutive = require("./index");

test("longestConsecutive works", () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
  expect(longestConsecutive([100, 4, 200, 1, 2])).toEqual(2);
  expect(longestConsecutive([0, -1])).toEqual(2);
  expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])).toEqual(7);
  expect(longestConsecutive([-1, -1, 0, 1, 3, 4, 5, 6, 7, 8, 9])).toEqual(7);
  expect(longestConsecutive([1, 2, 0, 1])).toEqual(3);
});
