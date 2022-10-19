/**
 * *time complexity for array methods
 * concat -   O(N)
 * sort -   O(N * log N)
 * pop -   O(1)
 * shift -   O(N)
 * @param {number[]} nums
 * @param {number[]} nums1
 * @returns {number} median of the two sorted arrays
 */

function medianOfTwoSortedArrays(nums, nums1) {
  const merged = [...nums, ...nums1].sort((a, b) => Number(b) - Number(a));

  if (merged.length % 2 === 0) {
    while (merged.length !== 2) {
      merged.shift();
      merged.pop();
    }
    return ((merged[0] + merged[1]) / 2).toFixed(5);
  }

  return merged[Math.floor(merged.length / 2)].toFixed(5);
}

module.exports = medianOfTwoSortedArrays;
