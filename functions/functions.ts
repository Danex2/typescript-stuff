const someFunc = (x: number, y: number, o: any) => {
  console.log(`${x} number, ${y} number, ${o} any`);
};

someFunc(40, 200, 'hello');

interface Square {
  height: number;
  width: number;
}

const calculateArea = (measurements: Square): number => {
  return measurements.height * measurements.width;
};

console.log(calculateArea({ height: 80, width: 20 }));

// function types
let myAdd: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

// optional params

const opParams = (firstName: string, lastName?: string): string => {
  return `${firstName} ${lastName}`;
};

console.log(opParams('Billy'));
