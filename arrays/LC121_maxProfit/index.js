/**
 * Time complexity On^2
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit0(prices) {
  let tempProfit = -Infinity;

  prices.forEach((price, i) => {
    const rest = prices.slice(i);
    rest.forEach((subPrice) => {
      tempProfit = Math.max(tempProfit, subPrice - price);
    });
  });

  return tempProfit;
}

/**
 * Time complexity - On
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let tempProfit = -Infinity,
    min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    if (prices[i] - min > tempProfit) {
      tempProfit = Math.max(prices[i] - min, tempProfit);
    }
  }

  return tempProfit;
}

module.exports = maxProfit;
