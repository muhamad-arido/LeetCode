class ProductOfNumbers {
  private prefixProduct: number[];

  constructor() {
    this.prefixProduct = [1];
  }

  add(num: number): void {
    if (num === 0) {
      this.prefixProduct = [1];
    } else {
      this.prefixProduct.push(this.prefixProduct[this.prefixProduct.length - 1] * num);
    }
  }

  getProduct(k: number): number {
    if (k >= this.prefixProduct.length) return 0;
    return this.prefixProduct[this.prefixProduct.length - 1] / this.prefixProduct[this.prefixProduct.length - 1 - k];
  }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */