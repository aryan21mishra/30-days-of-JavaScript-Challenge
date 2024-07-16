// Task 6 => calculate the factorial of a number

let num = 20
let n = 1
let result = 1
do {
   result *= n
   n++
} while (n <= num);
console.log(`The factorial of a ${num} is:`, result);