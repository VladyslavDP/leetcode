/**
 * Function that looking for a target value in sorted array
 * Time Complexity - Log(n)
 * @param {number[]} arr
 * @param {number} target
 */
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length;

  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);

    if (arr[pivot] === target) {
      return pivot;
    }

    if (arr[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
