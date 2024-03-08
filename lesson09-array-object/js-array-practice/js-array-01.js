// Bài 1: Tính tổng các số chẵn từ 1 tới n

const n = 10;
let result = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}

// for (let i = 2; i <= n; i += 2) {
//   result += i;
// }

console.log('Tổng các số chẵn từ 1 đến ', n, ' là:', result);
