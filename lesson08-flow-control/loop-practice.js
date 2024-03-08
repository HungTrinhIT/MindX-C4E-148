// Bài tập tính tổng
// 1. Tính tổng các số từ 1 -> n

const n = 5; // 1  2  3  4  5  6  ...  98  99  100
let result = 0;

for (let i = 1; i <= n; i++) {
  result = result + i;
}

console.log('Tổng các số từ 1 đến: ', n, 'là: ', result);
