console.log('Lesson 8: Flow control');

// 1. Global scope
// 2. Function scope
// 3. Block scope

// Khối lệnh
console.log('Hello world');
let x = 6;
const PI = 3.14;
{
  // PI = 5;
  x = 12;
  let y = 1;
  console.log(x, y, PI);
}

let y = 5;
console.log(x, y);

// Câu lệnh điều kiện
let a = 6;
let b = 6;
if (a % 2 == 0) {
  console.log('a là số chắn');
}

if (a % 2 != 0) {
  console.log('a là số lẻ');
}

if (a > b) {
  console.log('a lớn hơn b');
} else if (a < b) {
  console.log('a nhỏ hơn b');
} else {
  console.log('a bang b');
}

// switch - case
let day;
let toDay = 8; // new Date().getDay(); // 1
switch (toDay) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
  default:
    day = 'Ngày không hợp lệ';
    break;
}

console.log(day);

if (toDay == 0) {
  day = 'Sunday';
} else if (toDay == 1) {
  day = 'Monday';
} else {
  day = 'Ngày không hợp lệ';
}

console.log(day);

switch (new Date().getDay()) {
  case 0:
  case 6:
    day = 'Weekend';
    break;
  case 1:
  case 2:
    day = 'Start of week days';
    break;
  case 3:
  case 4:
  case 5:
    day = 'End of week days';
    break;
}

console.log(day);

// Vòng lặp
// for (<statement_1: Thực thi đầu tiên, 1 lần duy nhất>; <statement_2: Điều kiện kết thúc vòng lập>; <statement_3: Chạy sau mỗi vòng lập>) {
// 	/* block of code */
// Chạy code trong vòng lâp;
// }

let sum = 0;
for (let i = 0; i < 3; i++) {
  sum = sum + i;
}

console.log(sum);

// Lần chạy thứ 1
// sum = 0
// i = 0; 0 < 3: true;
// sum = 0 + 0 = 0;
// i = 0++ = 1

// Lần chạy thứ 2
// sum = 0;
// i = 1; 1 < 3: true;
// sum = 0 + 1 = 1;
// i = 1++ = 2;

// Lần chạy thứ 3
// sum = 1;
// i = 2; 2 < 3: true;
// sum = 2 + 1 = 3;
// i = 2++ = 3;

// Lần chạy thứ 3
// sum = 3;
// i = 3; 3 < 3: false;

// Đáp án: sum = 3;

// Vong lap while
let sum_while = 0;
let j = 1;

while (j < 5) {
  sum_while = sum_while + j;
  console.log(sum_while);
  j++;
}

console.log(sum_while);

// break and continue
for (let i = 1; i < 5; i++) {
  if (i % 2 == 0) {
    console.log(i + ' là số chắn');
    continue;
  }
}
