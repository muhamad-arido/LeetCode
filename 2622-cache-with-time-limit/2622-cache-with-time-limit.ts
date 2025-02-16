class TimeLimitedCache {
  private cache: Map<number, { value: number; exp: number }>;

  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const alreadyExists = this.cache.has(key);
    const exp = Date.now() + duration;

    this.cache.set(key, { value, exp });
    setTimeout(() => {
      if (this.cache.get(key)?.exp === exp) this.cache.delete(key);
    }, duration);

    return alreadyExists;
  }

  get(key: number): number {
    const entry = this.cache.get(key);
    if (!entry || entry.exp <= Date.now()) return -1;

    return entry.value;
  }

  count(): number {
    const now = Date.now();
    return Array.from(this.cache.values()).filter((entry) => entry.exp > now)
      .length;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */