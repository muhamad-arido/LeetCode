function doesValidArrayExist(derived: number[]): boolean {
  const isValid = (startValue: number): boolean => {
    const n = derived.length - 1;
    let prev = startValue;
    let current: number;

    for (let index = 0; index < n; index++) {
      current = prev ^ derived[index];
      prev = current;
    }

    return (prev ^ startValue) === derived[n];
  };

  return isValid(0) || isValid(1);
}