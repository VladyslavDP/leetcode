//dev.to/seanpgallivan/solution-container-with-most-water-1907

/**
 * Time complexity O(n)
 * Function that calculate max available volume
 * @param {number[]} height
 */
function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    area = 0,
    min = 0;

  while (left < right) {
    min = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(area, min);
    height[left] < height[right] ? left++ : right--;
  }
  return area;
}

module.exports = maxArea;
