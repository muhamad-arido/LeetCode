function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0];

  const profit: number[] = prices.map((value: number) => {
    if (value < minPrice) minPrice = value;
    return value - minPrice;
  });

  return Math.max(...profit);
};