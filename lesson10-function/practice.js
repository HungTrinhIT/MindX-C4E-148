// Quản lý lớp học MindX C4E 148
// BÀI 1
/*
      1. Xếp loại học sinh của lớp C4E JS 148 
          GPA = (math + english + chemistry) / 3;
              + Giỏi: GPA >= 8.0
              + Khá:  GPA >= 6.5 and GPA < 8.0
              + Trung Bình:  GPA < 6.5 và GPA >= 5.0
              + Yếu:  GPA < 5.0
  
      2. Thông báo cho phụ huynh học sinh xếp hạng gì theo cú pháp sau đây
      
      "Học sinh <ABC> xếp loại: <XYZ>"
  
      Yêu cầu:
      1. Viết Function tính GPA
          + Input: math, chemistry, english
          + Output: GPA
      
      2. Viết function Xếp loại:
          + Input GPA
          + Output: "Giỏi" | "Khá" | "Trung bình" | "Yếu"
      
      3. Viết function xếp loai học viên
          main()
          input: mảng lớp học
          logic: thông báo cho phụ huynh
          console.log("Học sinh <ABC> xếp loại: <XYZ>")
      
  */

const mindXClass = [
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

function calculateGPA(math, chemistry, english) {}

function classifyStudent(gpa) {}

function main(classes) {}

main();
// console.log("Học sinh <ABC> xếp loại: <XYZ>")
// console.log("Học sinh <ABC> xếp loại: <XYZ>")
// console.log("Học sinh <ABC> xếp loại: <XYZ>")
// console.log("Học sinh <ABC> xếp loại: <XYZ>")

// BÀI 2
/*
    Viết một hàm, để xác định xem đơn đặt hàng này có đủ điểu kiện để miễn phí giao hàng hay không. 
    Miễn phí khi và chỉ khi:
        - Tổng chi phí của các mặt hàng ≥ $50.00

    freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
    freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
    freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
*/

function freeShipping(cart) {
  // Your code here
}

// BÀI 3
/*
    Giả sử bạn có một object lưu trữ thông tin, 
    của các học sinh đến từ nhiều quốc gia khác nhau dưới dạng key-value pairs như sau:

    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }

    Hãy viết một function nhận vào `name` của một người trong `**GUEST_LIST**` và trả về như sau:
        - "Hi! I'm [name], and I'm from [country]."
        - Nếu `name` **không tồn tại** trong  `**GUEST_LIST**` , return: :   "Hi! I'm a guest."


    greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
    greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
    greeting("Monti") ➞ "Hi! I'm a guest."
*/

const GUEST_LIST = {
  Randy: 'Germany',
  Karla: 'France',
  Wendy: 'Japan',
  Norman: 'England',
  Sam: 'Argentina',
};
function greeting(name) {
    
}
