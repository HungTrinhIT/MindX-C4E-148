/* Bài 4: Tìm giá trị nhỏ nhất trong mảng 1 chiều
 */
/* Ngoài ra mọi người có thể dùng hàm Math.max() và Math.min() trong ngoặc là tham số truyền vào là một mảng nhé */
/* cách 1 */
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

/* Bài 5: Tìm giá trị lớn nhất trong mảng 1 chiều
 */
/* cách 1 */

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

/* Bài 6: Sắp xếp mảng theo thứ tự tăng dần */
/* cách 1 */
const array6 = [5, 3, 9, 1, 7];

/* 
Với mỗi phần tử trong mảng, thực hiện một vòng lặp lồng vào bên trong. Trong vòng lặp ngoài (for với biến i), nó lặp qua mỗi phần tử của mảng.
Trong vòng lặp trong (for với biến j), nó lặp qua các phần tử sau phần tử hiện tại (phần tử với chỉ số lớn hơn i).
Để so sánh phần tử hiện tại với các phần tử phía sau nó, từ vị trí tiếp theo đến cuối mảng.
Trong mỗi vòng lặp, nó so sánh phần tử hiện tại (arr[i]) với phần tử sau nó (arr[j]). Nếu arr[i] lớn hơn arr[j], nghĩa là phần tử hiện tại đứng trước phần tử sau trong thứ tự sắp xếp, thì chúng được hoán đổi vị trí.
Sau khi hoán đổi, phần tử nhỏ nhất sẽ nằm ở vị trí i, và các phần tử phía trước của nó đều nhỏ hơn nó.
Quá trình này lặp lại cho đến khi tất cả các phần tử đều được sắp xếp theo thứ tự tăng dần.
Cuối cùng,trả về mảng đã sắp xếp. */

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

/* cách 2 */
array6.sort((a, b) => a - b);


/* Bài 7: Sắp xếp mảng theo thứ tự giảm dần
 */
const array7 = [5, 3, 9, 1, 7];

/* cách 1 */
for (let i = 0; i < array7.length; i++) {
    for (let j = i + 1; j < array7.length; j++) {
        if (array7[i] < array7[j]) {
            let temp = array7[i];
            array7[i] = array7[j];
            array7[j] = temp;
        }
    }
}

/* cách 2 */
array7.sort((a, b) => b - a);


// Sử dụng:
const array = [5, 3, 9, 1, 7];
console.log("Mảng sau khi sắp xếp giảm dần là:", descendingSort(array));


/* Bài 8 */

const employees = [{
        name: "John",
        age: 21,
        salary: 23000
    },
    {
        name: "Steve",
        age: 32,
        salary: 40000
    },
    {
        name: "Martin",
        age: 16,
        salary: 2700
    },
    {
        name: "Cristiano Ronaldo",
        age: 39,
        salary: 100000
    },
    {
        name: "Messi",
        age: 37,
        salary: 500
    }
];

// a. Tính tổng lương nhân viên.
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
}

// b. Có bao nhiêu nhân viên lớn hơn 20 tuổi
let countEmployeesOver20 = 0;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > 20) {
        countEmployeesOver20++;
    }
}

// c. Có bao nhiêu nhân viên lớn hơn 25 tuổi và thu nhập nhỏ hơn 10000 dollars
let countEmployeesOver25WithSalaryUnder10k = 0;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > 25 && employees[i].salary < 10000) {
        countEmployeesOver25WithSalaryUnder10k++;
    }
}