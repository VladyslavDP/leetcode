const binarySearch = require("./index");

test("binary search works", () => {
  const arr = Array.from(Array(10).keys());

  // expect(binarySearch(arr, 4)).toEqual(4);
  // expect(binarySearch(arr, 0)).toEqual(0);
  expect(binarySearch(arr, 8)).toEqual(8);
  expect(binarySearch(arr, 11)).toEqual(-1);
});
