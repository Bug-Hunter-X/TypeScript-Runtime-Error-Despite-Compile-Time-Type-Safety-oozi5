function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

const result1 = add(10, 20); // Correct usage
console.log(result1); // Output: 30

try {
  const result2 = add("hello", "world");
  console.log(result2); 
} catch (error) {
  console.error(error.message); // Output: Both parameters must be numbers
}
//Alternative solution with type guards
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function add2(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}
const result3 = add2(30, 40); // Correct usage
console.log(result3); // Output: 70

try {
  const result4 = add2("hello", "world");
  console.log(result4); 
} catch (error) {
  console.error(error.message); // Output: Both parameters must be numbers
}