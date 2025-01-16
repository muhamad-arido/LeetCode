type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    for (let index = functions.length - 1; index >= 0; index--) {
      x = functions[index](x);
    }

    return x;
  };
}

// /**
//  * const fn = compose([x => x + 1, x => 2 * x])
//  * fn(4) // 9
//  */