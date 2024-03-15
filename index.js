let arr = [5, 10, 3, 8, 15, 7, 20];
let max = arr[0];//5
let secondMax = arr[0];//5

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}

console.log("Số lớn thứ hai trong mảng là:",max,  secondMax);
