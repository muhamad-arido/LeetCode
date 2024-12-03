function addSpaces(s: string, spaces: number[]): string {
  const result: string[] = [...s];

  for (let index = 0; index < spaces.length; index++) {
    result[spaces[index]] = ` ${result[spaces[index]]}`;
  }

  return result.join("");
};