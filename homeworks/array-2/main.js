/* ### Bài 1

Viết một function Javascript in ra các số từ 1 đến 15 **trên 1 dòng** thỏa mãn điều kiện sau:

- Nếu số đó ***chia hết cho 3*** ⇒ in ra **"Fizz"**
- Nếu số đó ***chia hết cho 5*** ⇒ in ra "**Buzz"**
- Nếu số đó ***chia hết cho 3 và 5***⇒ in ra **"FizzBuzz"**

**Output**: là một **string** thõa yêu cầu đề bài như trên. */

function fizzBuzz() {
  let res = '';
  for (let index = 1; index <= 15; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      res += 'Fizz';
    } else if (index % 5 === 0) {
      res += 'Buzz';
    } else if (index % 3 === 0) {
      res += 'FizzBuzz';
    }
  }
  return res;
}

console.log(fizzBuzz());

/* ### Bài 2 Count Vowels

Viết một Javascript function, đếm số lượng các vowels trong một chuỗi

Biết rẳng **`vowels = { 'e' , 'u', 'o' ,'a' ,'i'}`** 

Mỗi `test case` đúng: `5 points` 

**Input**: Một string 

**Output**: Số lượng vowels (có xử lý ngoại lệ) */

function countVowels(str) {
  const vowels = ['e', 'u', 'o', 'a', 'i'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('Viet Nam vo dich. Malaysia tuoi gi :))'));

/*
countVowels('anhyeuem') → 4
countVowels('Viet Nam vo dich. Malaysia tuoi gi :))') → 13
countVowels('') → 0
countVowels('Javascript is a beautiful programming language') → 17
countVowels(123) → "Dữ liệu đầu vào không hợp lệ!!!"
*/

/* ### Bài 3:

Viết chương trình xóa các element trùng trong mảng

**Input**: mảng 1 chiều

**Output**: mảng đã được remove các phần tử trùng

Ví dụ: 
["one", "one", "one", "two","two", "three", "one"] => ["one", "two","three"]

*/

function removeDuplicateFromArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  let output = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!output.includes(element)) {
      output.push(element);
    }
  }

  return output;
}

console.log(removeDuplicateFromArray([1, 1, -1, 3, 5, 10]));
console.log(removeDuplicateFromArray(['a', 'b', 'c', 'd', 'd', 'c', 'a']));

/*
removeDuplicateFromArray([1,1,-1,3,5,10]) => [1,-1,3,5,10]
removeDuplicateFromArray([true, 3, "hello" , false, "hello", true]) => [true,3,"hello",false]
removeDuplicateFromArray('a','b','c','d','d','c','a') => ['a','b','c','d']
removeDuplicateFromArray("Hello") => "Du lieu dau vao khong hop le"
*/

/* ### Bài 4: Kiểm tra 1 chuỗi có phải là chuỗi Palindrome hay không

Palindrome là một từ hoặc một cụm từ mà khi ta đọc xuôi hoặc đọc ngược thì nó cũng như vậy, ví dụ từ moom, racecar

Nếu:

- Là chuỗi Palindrome ⇒ Return true
- Không là chuỗi Palindrome ⇒ Return false */

/* Cach 1 */
function isPalindrome(str) {
  let newString = '';
  for (let index = str.length - 1; index >= 0; index--) {
    newString += str[index];
  }
  return str === newString;
}

/* Cach 2 */
function isPalindrome(str) {
  //abcde -> a b c d e -> e d c b a-> edcba
  let newStr = str.split('').reverse().join('');
  return str === newStr;
}
console.log(isPalindrome('moon'));
console.log(isPalindrome('moom'));

/* bai 5 */
const employeesInfo = [
  {
    name: 'David',
    workingTime: 98,
    salary: 10,
  },
  {
    name: 'Luiz',
    workingTime: 78,
    salary: 20,
  },
  {
    name: 'Silva',
    workingTime: 165,
    salary: 25,
  },
  {
    name: 'Santos',
    workingTime: 215,
    salary: 30,
  },
  {
    name: 'Alex',
    workingTime: 143,
    salary: 28,
  },
];

// Cau a: Viết hàm tính tổng lương công ty phải trả trong 1 tháng
// Goi y: Luong nhan vien = workingTime * salary
function getTotalSalaryOfCompany() {
  let total = 0;
  employeesInfo.forEach((employee) => {
    total += employee.workingTime * employee.salary;
  });
  return total;
}
console.log(getTotalSalaryOfCompany(employeesInfo));

/* 
//Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo
/*
  - Lương của nhân viên = workingTime * salary + bonus
  - Cách tính bonus:
    - Nếu số giờ làm việc >= 150: bonus = 200
    - Nếu số giờ làm việc >= 100 và < 150: bonus = 150
    - Nếu số giờ làm việc >= 50 và < 100 : bonus = 100
    - Nếu số giờ làm việc  < 50: bonus = 50
 */
/*
	- Input: ten 1 nhan vien bat ki trong employees list
	- Output: Luong cua nhan vien do
	- Goi y: su dung ham obj.hasOwnProperty(key) de kiem tra key co ton tai trong obj hay khong.
	- Co the tach nho logic tinh bonus thanh 1 function rieng => De dang hon.
*/

const employeesInfo2 = [
  {
    name: 'David',
    workingTime: 98,
    salary: 10,
  },
  {
    name: 'Luiz',
    workingTime: 78,
    salary: 20,
  },
  {
    name: 'Silva',
    workingTime: 165,
    salary: 25,
  },
  {
    name: 'Santos',
    workingTime: 215,
    salary: 30,
  },
  {
    name: 'Alex',
    workingTime: 143,
    salary: 28,
  },
];

function getTotalSalaryOfEmployee(name) {
  const employee = employeesInfo2.find((emp) => emp.name === name);
  if (!employee) {
    return 'Nhân viên không tồn tại';
  }
  let bonus = 0;
  if (employee.workingTime >= 150) {
    bonus = 200;
  } else if (employee.workingTime >= 100 && employee.workingTime < 150) {
    bonus = 150;
  } else if (employee.workingTime >= 50 && employee.workingTime < 100) {
    bonus = 100;
  } else {
    bonus = 50;
  }

  const salary = employee.workingTime * employee.salary + bonus;
  return `${employee.name} có mức lương là ${salary}`;
}
console.log(getTotalSalaryOfEmployee('Alex'));
console.log(getTotalSalaryOfEmployee('Santos'));
console.log(getTotalSalaryOfEmployee('Eddie'));

/* ### Bài 6

Cho một mảng số nguyên `nums` và một số nguyên `target`, hãy trả về các chỉ số của hai số sao cho tổng của chúng là `target`.

Ví dụ 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
function indexofNumbers(numberList, target) {
  let numArr = {};

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    const result = target - number;
    if (numArr.hasOwnProperty(result)) {
      return [numArr[result], index];
    }
    numArr[numberList[index]] = index;
  }
  return [];
}

console.log(indexofNumbers([3, 2, 4], 6));
console.log(indexofNumbers([1, 5, 4], 6));
console.log(indexofNumbers([3, 8, 4], 6));
