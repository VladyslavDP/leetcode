function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const remains = target - arr[i];

    if (map.has(arr[i])) {
      return [map.get(arr[i]), i];
    }

    map.set(remains, i);
  }
}

module.exports = twoSum;
