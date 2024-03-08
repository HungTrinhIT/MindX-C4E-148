/*
    Bài 3: Từ mảng ban đầu hãy liệt kê 
    kiểu dữ liệu của các giá trị trong mảng ban đầu

    input: ["214", true, false, 2, 2.15, [], null]
    expected output: ["string", "boolean", "boolean", "number", "number", "object", "object"]
*/

const input = ['214', true, false, 2, 2.15, [], null, undefined];
let output = [];

for (let i = 0; i < input.length; i++) {
  const datatypeOfElement = typeof input[i];
  output.push(datatypeOfElement);
}

console.log('Output:', output);
