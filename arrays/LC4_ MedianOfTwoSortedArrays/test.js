const medianOfTwoSortedArrays = require("./index");

test("medianOfTwoSortedArrays([1,3], [2]) returns 2.00000", () => {
  expect(medianOfTwoSortedArrays([1, 3], [2])).toEqual("2.00000");
});

test("medianOfTwoSortedArrays([1,2], [3,4]) returns 2.50000", () => {
  expect(medianOfTwoSortedArrays([1, 2], [3, 4])).toEqual("2.50000");
});

test("medianOfTwoSortedArrays([1,3], [2,7]) returns 2.50000", () => {
  expect(medianOfTwoSortedArrays([1, 3], [2, 7])).toEqual("2.50000");
});

test("medianOfTwoSortedArrays([1,3,5,7,9], [2,4,6,8,10]) returns 5.50000", () => {
  expect(medianOfTwoSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual(
    "5.50000"
  );
});

test("medianOfTwoSortedArrays([3], [-2,-1]) returns -1.00000", () => {
  expect(medianOfTwoSortedArrays([3], [-2, -1])).toEqual("-1.00000");
});
