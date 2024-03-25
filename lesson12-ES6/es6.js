var score; // undefined

// Function expression (naming function)
// function sum(a, b) {
//   return a + b;
// }

// Anonymous function
// const sum = function (a, b) {
//   return a + b;
// };

// 1. Arrow function
const sum = (a, b) => {
  const result = a + b;
  return result;
};

const sub = (a, b) => a - b;
const double = (n) => 2 * n;
const getInformation = () => ({
  name: 'Harry',
  title: 'Software Engineer',
  programmingLanguages: ['C++', 'Java', 'Javascript'],
});

// console.log(sum(4, 5));

console.log(score); // undefined
score = 10;
console.log(score); // 10

// Báo lỗi tại dòng code thứ 27 (do rank chưa được khai báo)
// console.log(rank);
// let rank = 'diamond';
// console.log(rank);

/*
    Scope
        block scope < function scope < global scope

    var: 
        - có hoisting (đưa lên đầu chương trình để khai báo)
        - Nghĩa là: có thể sử dụng được biến đó trước khi khai báo
        - Phạm vi hoạt động: global scope , nếu nằm trong function thì là function scope

    let, const:
        - KHÔNG có hoisting 
        - block scope

    let, var có thể re-assign (gán lại)

    const KHÔNG thể re-assign 
*/

if (true) {
  {
    // Block scope
    {
      var PI = 3.14;
    }
  }
}

// Function scope
function greeting() {
  var message;
  console.log('Greeting message:', message);
  {
    message = 'Hello MindX';
  }
  console.log('Greeting message:', message);
}

greeting();
console.log('Giá trị số PI là:', PI);

// 2. Template Literal (Literal String)
const a = 10;
const b = 25;
console.log('Tổng của ', a, '+', b, '=', a + b);
console.log(`Tổng của ${a} + ${b} = ${a + b}`);

// 3. Spread & Rest operator
// spread operator: ...
const nums = [1, 2, 10, 50, 8];
const copyArrayFromNums = [...nums];

copyArrayFromNums.push(70);
console.log(nums);
console.log(copyArrayFromNums);

const person = {
  name: 'Harry',
  title: 'Software Engineer',
  address: {
    no: 123,
    street: 'Hai Ba Trung',
  },
};

const anotherPerson = { ...person, address: { ...person.address } };

anotherPerson.name = 'Peter';
anotherPerson.address.no = 456;

console.log('person', person);
console.log('anotherPerson:', anotherPerson);

// Viết function deep copy object
// Recursive

const firstArr = [1, 10, -5];
const secondArr = [-7, 8, 200];

// const combinedArr = firstArr.concat(secondArr);
const combinedArr = [...firstArr, ...secondArr];
console.log('🚀 ~ combinedArr:', combinedArr);

// 3. Destructuring
const product = {
  title: 'IPhone 14 ProMax 256GB',
  color: 'Đen',
  price: '26.000.000VNĐ',
};

// Object destructuring
const { title, color, price } = product;

console.log(`
    Tôi đang sử dụng ${title}
    Có màu ${color}
    Với giá ${price}
`);

// Array destructuring
const hooks = [
  10,
  function setValue(value) {
    return value;
  },
];

const [value, setValue] = hooks;
console.log(setValue);

// Array method in ES6
/*
    1. map() - DONE
    2. filter() - DONE
    3. reduce()
    4. find(), findIndex
    5. some(), every()
*/

// Hàm map
// Giữ nguyên số lượng element
// Thay đổi tích chất
const numbers = [1, 2, 3, 4, 5, 6, -10, 8, 20];

const doubleNumbers = numbers.map((num) => num * 2);
console.log('🚀  ~ doubleNumbers:', doubleNumbers);

// Filter
// Số lượng phần từ bé hơn hoặc bằng mảng ban đầu
// Giá trị true thêm vào
// False thì skip
const oddNumbers = numbers.filter((num) => {
  const isOddNumber = num % 2 === 1;
  return isOddNumber;
});

console.log('🚀 ~ oddNumbers:', oddNumbers);

const products = [
  {
    id: 10,
    title: 'Samsung Galaxy ',
    price: 10000000,
  },
  {
    id: 1,
    title: 'Iphone 15 Pro Max',
    price: 200,
  },
  {
    id: 2,
    title: 'Iphone 16 Pro Max',
    price: 200,
  },
  {
    id: 3,
    title: 'Iphone 17 Pro Max',
    price: 200,
  },
  {
    id: 4,
    title: 'Iphone 18 Pro Max',
    price: 200,
  },
];

// const productsElement = document.querySelector('.products');
// const cart = [];

// const listProduct = products.map((product) => {
//   const { id, title, price } = product;

//   return `
//     <div style="border: 1px solid black; padding:24px; margin: 16px;">
//       <h1>${title}</h1>
//       <p>${price}</p>
//     </div>
//   `;
// });

// productsElement.innerHTML = listProduct.join('');

// Reduce
const sumOfArray = (arr = []) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumOfArray([1, 2, 3]));
console.log(sumOfArray([-5, 5, 10]));

const arr = [5, -7, 20]; // 18

/*
  arr.reduce(callback, initialValue )

  callback(accumulator, currentValue, currentIndex, array)
*/

console.log('\n\nDEMO REDUCE method');
const sumByReduce = arr.reduce((acc, cur) => acc + cur, 10);

const carts = [
  {
    id: 1,
    title: 'PC Gaming',
    quantity: 10,
    price: 10000,
  },
  {
    id: 2,
    title: 'Keyboard',
    quantity: 5,
    price: 5000,
  },
  {
    id: 3,
    title: 'Mouse',
    quantity: 2,
    price: 1000,
  },
];

const sumOfCarts = carts.reduce(
  (acc, { quantity, price }) => acc + quantity * price,
  0
);

console.log('🚀 ~ sumOfCarts ~ sumOfCarts:', sumOfCarts);

console.log('Sum:', sumByReduce);
