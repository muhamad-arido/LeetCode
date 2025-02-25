interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
  return this.reduce((acc, item) => {
    (acc[fn(item)] ||= []).push(item);
    return acc;
  }, {} as Record<string, any[]>);
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */