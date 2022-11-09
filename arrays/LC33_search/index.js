/**
 * Function that search number in sorted array
 * Time complexity O(log n)
 * @param {number[]} nums
 * @param {number} target
 */
function search(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0,
    right = nums.length - 1;

  const isBeetween = (num1, num2, target) => num1 <= target && num2 >= target;

  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);

    if (nums[pivot] === target) return pivot;

    // it's sorted
    if (nums[left] <= nums[pivot]) {
      // search in range
      if (isBeetween(nums[left], nums[pivot], target)) {
        right = pivot - 1;
      }
      // search in another subArray
      else {
        left = pivot + 1;
      }
    } else {
      if (isBeetween(nums[pivot], nums[right], target)) {
        left = pivot + 1;
      } else {
        right = pivot - 1;
      }
    }
  }

  return -1;
}

module.exports = search;
