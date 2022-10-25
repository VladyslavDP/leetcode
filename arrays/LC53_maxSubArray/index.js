/**
 * Time complexity O(n)
 * @param {number[]} nums
 * @returns
 */
function maxSubArray(nums) {
  let temp = 0,
    max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    temp = Math.max(temp + nums[i], nums[i]);
    max = Math.max(temp, max);
  }

  return max;
}
/**
 * Time complexity O(n^2)
 * @param {number[]} nums
 */
function maxSubArray_(nums) {
  let max = nums[0];
  let temp = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const subArray = nums.slice(i + 1);
    temp = nums[i];
    for (let y = 0; y < subArray.length; y++) {
      temp += subArray[y];
      temp = Math.max(temp, subArray[y]);
      max = Math.max(max, temp);
    }
  }
  return max;
}

module.exports = maxSubArray;
