/*
    Bài 2: Tính giá trị của n! (n>=0)
           Giải thừa: 
                    2! = 1 * 2
                    3! =  1 * 2 * 3
                    ....
                    n = 1 * 2 * 3 * ... * n
            Chú ý: 0! = 1! = 1
*/

const n = 10;
let result = 1;

for (let i = 1; i <= n; i++) {
  result *= i;
}

console.log(n, '!giai thừa là:', result);
