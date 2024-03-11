// Quản lý lớp học MindX C4E 148

const classes = [
  {
    fullname: 'Nguyễn Văn A',
    mathScore: 10,
    englishScore: 8,
    chemistry: 7,
    gender: 'male',
    address: {
      street: 'Hai Bà Trưng',
      postalCode: 700270,
      district: 'Bình Thạnh',
    },
  },
  {
    fullname: 'Leo Messi',
    mathScore: 5,
    englishScore: 10,
    chemistry: 6,
    gender: 'male',
    address: {
      street: '12',
      postalCode: 700270,
      district: 'Gò Vấp',
    },
  },
  {
    fullname: 'Cristiano Ronaldo',
    mathScore: 10,
    englishScore: 10,
    chemistry: 10,
    gender: 'male',
    address: {
      street: 'Bạch Đằng',
      postalCode: 700270,
      district: 'Hoàng Mai',
    },
  },
  {
    fullname: 'Lê Thị B',
    mathScore: 6,
    englishScore: 4,
    chemistry: 2,
    gender: 'female',
    address: {
      street: '12',
      postalCode: 700270,
      district: 'Gò Vấp',
    },
  },
];

/*
    1. Xếp loại học sinh của lớp C4E JS 148 
        GPA = (math + english + chemistry) / 3;
            + Giỏi: GPA >= 8.0
            + Khá:  GPA >= 6.5 and GPA < 8.0
            + Trung Bình:  GPA < 6.5 và GPA >= 5.0
            + Yếu:  GPA < 5.0

    2. Thông báo cho phụ huynh học sinh xếp hạng gì theo cú pháp sau đây
    
    "Học sinh <ABC> xếp loại: <XYZ>"
    
*/

const names = ['Hoa', 'Vinh', 'Hùng', 'Huệ', 'Lan', 'Ánh', 'Bích', 'Tài'];

function sayHello(name) {
  // Function scope
  console.log('Xin chào ', name, ' !');
}

for (let i = 0; i < names.length; i++) {
  // trigger / invoke
  const namingOfStudent = names[i];
  sayHello(namingOfStudent);
}

// Calculator
/*
    Viết hàm tính tổng 2 số, sau đó trả về giá trị
    là tổng 2 số đó.

    Input: a, b
    Logic: a + b
    Output: là tổng của a và b
*/
function sum(a, b) {
  const result = a + b;

  return result;
}

const sumBetweenForAndFive = sum(4, 5);
console.log('sumBetweenForAndFive', sumBetweenForAndFive);

// Viết 1 cái máy tính
// Input: a, b, sign = "+" , "-" , "*", "/"
// Output: Giá trị của phép tính đó

function calculator(a, b, sign) {
    let result;
    //Your code here

    return result
}
