// generic higher order function
const multiplyBy = by => num => num * by;
let res = multiplyBy(2)(3);
console.log(res);

// multiplier 2
const multiplyBy2 = multiplyBy(2);
res = multiplyBy2(10);
console.log(res);

// multiplier 10
const multiplyBy10 = multiplyBy(10);
res = multiplyBy10(10);
console.log(res);
