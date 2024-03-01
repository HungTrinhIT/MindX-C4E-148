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
console.log( employee);

employee = null;
console.log( employee);
