function smallestNumber(pattern: string): string {
  const stack: number[] = [];
  let res: string = "";
  let num = 1;

  for (let i = 0; i <= pattern.length; i++) {
    stack.push(num++);

    if (i === pattern.length || pattern[i] === "I") {
      while (stack.length) {
        res += stack.pop();
      }
    }
  }

  return res;
};