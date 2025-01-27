class ArrayWrapper {
  private nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  toString(): string {
    return `[${this.nums}]`;
  }
}

type Operation = "Add" | "String";
function test(nums: number[][], operation: Operation): number | string {
  const wrappers = nums.map((e) => new ArrayWrapper(e));

  switch (operation) {
    case "String":
      return wrappers[0]?.toString() ?? "[]";
    case "Add":
      return wrappers.reduce((sum, wrapper) => sum + wrapper.valueOf(), 0);
    default:
      throw new Error("Operation not available");
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */