

// Function expression, hoisting supported
console.log(sum(1,2));
function sum(a, b) {
  console.log('Sum 2 number')
  return a + b;
}



// Arrow function
// Arrow function, no hoisting supported
const sumArrow = (a, b) => {
  console.log('Sum 2 number with full arrow')
  return a + b;
} // arrow function
console.log(sumArrow(1, 4));

const sub = (a, b) => a - b; // short handed return
console.log(sub(5, 4));

const double = a => a*2; // single param
console.log(double(4));

const getAddress = () => (
  {
    name: 'MindX',
    age: 12
  }
)
console.log(getAddress())

const getArr = () => ([1, 3, 4]);
console.log(getArr());

const school = {
  name: 'MindX',
  age: 12
}

const increaseAge = (obj) => {
  obj.age += 1;
  return obj;
}

console.log(increaseAge(school));

// Template literal
const name = "MindX";
const str = "hello" + name + "!"; // normal way
const strLiteral = `
hello, ${name}!
Welcome to our website.
`; // template literal, support multiple lines.

console.log(str);
console.log(strLiteral);

// Module: Exports & Imports
import {sum as sumMath, sub2} from "./modules/math.js"; // Import and rename
console.log(sumMath(1, 7));
console.log(sub2(3, 7));

import math from "./modules/math.js";
console.log(math.sub2(1, 9));

// Spread & Rest Operator
const arr = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log([1000, ...arr, ...arr2, 9, 10, 11]);

const arr3 = [...arr];
arr3.push(9);
console.log(arr, arr3);

console.log(Math.max(...arr));


const mindx = {name: 'MindX'};
const mindx2 = {...mindx, age: 10};

mindx2.name = 'MindX 2';

console.log(mindx, mindx2);


const sumArr = (a, b, ...arr) => {
  let total  = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  return total;
}

console.log(sumArr(1,2,3, 'MindX',4,5));

// Destructuring
const person = {name: "MindX", age: 7, heigt: 170}
const {heigt, name: newName, age} = person;
console.log(heigt, newName, age);

const coordinate = [0, 1, 1, 6, 7];
const [x, y, ...z] = coordinate;

console.log(x, y, z);

// Destrucring on params
const sayHello = ({name}) => {
	console.log(`Hello, my name is ${name}`);
}
sayHello({name: "MindX", age: 7})

const numbers = [0, 1, 1, 6, 7];

let newNums = numbers.map(num => {
  return num * 2;
})
console.log(numbers, newNums);

newNums = numbers.filter(num => num % 2 === 0)
console.log(numbers, newNums);

const totalArr = numbers.reduce((currentTotal, num) => {
  console.log(currentTotal);
  return currentTotal + num;
}, 10);

console.log(totalArr)

// currentTotal = 0, num = 0,  // currentTotal = 0 + 0
// currentTotal = 0, num = 1, // currentTotal = 0 + 1;
// currentTotal = 1, num = 1, // currentTotal = 1 + 1;
// currentTotal = 2, num = 6, // currentTotal = 6 + 2;
// currentTotal = 8, num = 7, // currentTotal = 8 + 7;
// totalArr = 15;

