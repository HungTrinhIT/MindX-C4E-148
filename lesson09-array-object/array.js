// 1. ARRAY
// array, element, index, length
// index bắt đầu từ 0 -> kết thúc tại (length - 1)
// element là array[i]

const revenues = [100, 300, 80, 100, 150, 300, 400];
let theNumberOfDays = revenues.length;

console.log('The number of days:', theNumberOfDays);
console.log('Revenue of the first day: ', revenues[0]);
console.log('Revenue of the third day', revenues[2]);

//Độ dài của mảng
let theNumberOfRevenues = revenues.length;
console.log('Tổng số ngày bán hàng là', theNumberOfRevenues); // 7 days

// Doanh thu ngày đầu tiên
let firstRevenue = revenues[0];
let lastRevenue = revenues[theNumberOfDays - 1]; //let lastRevenue = revenues[theNumberOfRevenues - 1]
// n gia tri: index 0 -> n-1
// console.log('AAAAAA:', revenues[100]);

// CÁCH DUYỆT MẢNG NHƯ THẾ NÀO
console.log('Doanh thu của ngày thứ 1 là: $', revenues[0]);
console.log('Doanh thu của ngày thứ 2 là: $', revenues[1]);
console.log('Doanh thu của ngày thứ 3 là: $', revenues[2]);
console.log('Doanh thu của ngày thứ 4 là: $', revenues[3]);
console.log('Doanh thu của ngày thứ 5 là: $', revenues[4]);
console.log('Doanh thu của ngày thứ 6 là: $', revenues[5]);
console.log('Doanh thu của ngày thứ 7 là: $', revenues[6]);

console.log('\n\nCách dùng vòng lặp');

// Array manipulation: Thao tác với mảng một chiều
// const revenues = [100, 300, 80, 100, 150, 300, 400];

// Phương thúc push() => thêm vào cuối mảng
revenues.push(1400);

// unshift() => theem vào đầu mảng
revenues.unshift(10);

// Xóa cuối
revenues.pop();

// Xóa đầu
revenues.shift();

let totalOfRevenues = 0;

for (let i = 0; i < revenues.length; i++) {
  const revenueOfEachDay = revenues[i];
  totalOfRevenues += revenueOfEachDay;
  console.log('Doanh thu của ngày thứ', i + 1, 'là: $', revenueOfEachDay);
}

console.log('Tổng doanh thu của công ty là:', totalOfRevenues);

const bookRevenues = [123, 10, 200, 15];

// Mảng là tổng hợp doanh thu
const mergedRevenues = revenues.concat(bookRevenues);
console.log('Doanh thu tổng hợp:', mergedRevenues);

// Muốn cắt mảng từ vị trí thứ a tới b
// slice(start, end)b = end - 1
const sliceArrayOne = mergedRevenues.slice(4, 8);
console.log('🚀 ~ sliceArrayOne:', sliceArrayOne);

// Đảo ngược mảng
const reversedArray = sliceArrayOne.reverse();
console.log('🚀 ~ reversedArray:', reversedArray);

// const numbers = [1, 10 , 20, 100, 80, 6, 7]
// insert n value at k position
// input: numbers , n  , k
// output: new numbers array [1, 10 ,-5, 20, 100, 80, 6, 7]

// THAM CHIÊU TRONG MẢNG (ARRAY)
const toyotaPrices = ['$10000', '$30000', '$500', '$24000'];
const hondaPrices = toyotaPrices;

console.log('Giá ban đầu');
console.log('Giá xe Toyota:', toyotaPrices);
console.log('Giá xe Honda:', hondaPrices);

toyotaPrices[2] = '$50000';
toyotaPrices.push('$1.000.000');
hondaPrices.reverse();
hondaPrices.push('$1234');

console.log('\nGiá xe Toyota:', toyotaPrices);
console.log('\nGiá xe Honda:', hondaPrices);

console.log(nums);
