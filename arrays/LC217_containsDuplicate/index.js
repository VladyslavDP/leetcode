/**
 * Function that checks if array has dublicates
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = 1;
    }
  }
  return false;
}

module.exports = containsDuplicate;
