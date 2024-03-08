// 1. Variable
// Để khai báo biến: let, const, var
let greeting = 'Hello C4EJS 148'; // => string
const PI = 3.14; // number
var studentName = 'Alexis'; // => string

// Không được re-assign các biến
// được khai báo bằng từ khoá const
// PI = 3.1412;

console.log(greeting);
console.log('Số PI có giá trị là:', PI);
console.log('My name is:', studentName);

/*
    2. Quy tắc đặt tên biến

        + Phải bắt đầu bằng chữ cái hoặc _ hoặc $
        + Case-sensitive: có phân biệt hoa thường 
            name khác Name
        + không được sử dụng những từ khoá đặt biệt để đặt tên: 
        let, const, var, delete, promise, class, new

*/

// Wrong
// let 1a = 50;

// Correct
const a = 10;
let _isAuthenticated = true;
let $aaa = 'aaa';

const name = 10;
const Name = 100;

// wrong
// const class = "abc"

// 3. CÁCH ĐẶT TÊN BIẾN:
//  camel case THÔNG DỤNG hơn snake case
//  - Camel case:
//  - Snake case: even_numbers, should_allow_access_to_website

const evenNumbers = [10, 20, 24];
const shouldAllowAccessToWebsite = true; // boolean
console.log(typeof shouldAllowAccessToWebsite);

// Không nên đặt tên biến bằng tiếng Việt
const danhSachSoChan = [10, 100, 20];

// DATA TYPES
// number, string, boolean, null , undefined, Symbol, function, object, array

// 1. Primitive Datatypes (Kiểu dữ liệu nguyên thuỷ)
// number, string, boolean(true/false), null , undefined, symbol

// 2. Reference Datatypes (Kiểu dữ liệu dạng tham chiếu)
// function, array, object

let employee;
console.log(employee);

employee = null;
console.log(employee);

// TOÁN TỬ
console.log('Toán tử toán học');
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 ** 2);
console.log(7 % 4);

let i = 5;
i++; // i = i + 1
i--; // i = i - 1
console.log(i);

// Toán tử gán
console.log('Toán tử gán');
let x = 3;
x += 2; // x= x + 2 =3 + 2= 5
let y = 5;
// x += y; // x = x + y => x;
// x -= y; // x = x - y => x;
// x *= y; // x = x * y => x;
// x /= y; // x = x / y => x;
// x %= y; // x = x % y => x;
x **= y; // x = x + y => x;
console.log(x, y);

console.log('Toán nối chuỗi');
let str_x = 'Hellow';
let str_y = 'World';

console.log(str_x + ' my ' + str_y + ", I'm " + x + ' years old');

console.log('Toán tử so sánh');
console.log(2 == '2');
console.log(2 === '2'); // Kiểm tra cả giá trị
console.log(2 != 3); // Khác
console.log(2 <= 2);

console.log('Toán tử logic');
// true: Khi các mệnh đề đều đúng, ngược lại false
// true && true ==> true
// true && false ==> false
// false && false ==> false
// false && false ==> false
console.log(2 == 2 && 3 > 2); // Toán tử và

// false: Tất cả các mệnh đề đều sai, ngược lại đúng
// false || false ==> false
// false || true ==> true
// true || true ==> true
// true || false ==> true
console.log(2 > 2 || 3 > 5); // Toán tử hoặc

console.log(!false); 
