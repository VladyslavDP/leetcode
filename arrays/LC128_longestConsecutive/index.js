/**
 * Time complexity - O(n)
 * Function that return longestConsecutive,
 * e.g. [100,4,200,1,3,2] returns [1,2,3,4]
 * @param {number[]} nums
 */
function longestConsecutive_(nums) {
  let max = 1;
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  for (const num of nums) {
    // looking for start point
    if (set.has(num - 1)) continue;

    let n = num;
    let streak = 1;

    while (set.has(n + 1)) {
      n += 1;
      streak += 1;
      max = Math.max(max, streak);
    }
  }

  return max;
}

/**
 * Time complexity - O(N * log N)
 * Function that return longestConsecutive,
 * e.g. [100,4,200,1,3,2] returns [1,2,3,4]
 * @param {number[]} nums
 */
function longestConsecutive_(nums) {
  let res = nums.length === 0 ? 0 : 1;
  let temp = nums.length === 0 ? 0 : 1;

  nums.sort((a, b) => a - b);
  nums = Array.from(new Set(nums));

  for (i = 0; i < nums.length - 1; i++) {
    const currVal = Number(nums[i]);
    const nextVal = Number(nums[i + 1]);

    if (nextVal - currVal === 1) {
      temp += 1;
      res = Math.max(temp, res);
    } else {
      temp = 1;
    }
  }

  return res;
}

module.exports = longestConsecutive;
