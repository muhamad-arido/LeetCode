function pickGifts(gifts: number[], k: number): number {
  for (let index = 0; index < k; index++) {
    const maxGift: number = Math.max(...gifts);
    const indexOfMax: number = gifts.indexOf(maxGift);

    gifts[indexOfMax] = Math.floor(Math.sqrt(maxGift));
  }
  return gifts.reduce((a, b) => a + b);
}