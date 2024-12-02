function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0];
  let profit: number[] = [];

  prices.map((value: number) => {
    if (value < minPrice) minPrice = value;
    if (value > minPrice) profit.push(value - minPrice);
  });

  return profit.length == 0 ? 0 : Math.max(...profit);
};