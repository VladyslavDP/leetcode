const maxSubArray = require("./index");

test("[-2,1,-3,4,-1,2,1,-5,4] returns 6 for [4,-1,2,1]", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});

test("[5,4,-1,7,8] returns 23 for [5,4,-1,7,8]", () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
});

test("[-2, 1] returns 1 for [1]", () => {
  expect(maxSubArray([-2, 1])).toEqual(1);
});

test("[1,2,3,4] returns 10 for [1,2,3,4]", () => {
  expect(maxSubArray([1, 2, 3, 4])).toEqual(10);
});
