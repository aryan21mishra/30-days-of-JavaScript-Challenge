// Task 3=> find the largest of three numbers

let num1 = 5
let num2 = 34
let num3 = 33

if (num1 > num2 && num1 > num3) {
   console.log(num1, 'is the largest number');
} else if (num2 > num1 && num2 > num3) {
   console.log(num2, 'is the largest number');
} else if (num3 > num1 && num3 > num1) {
   console.log(num3, 'is the largest number');
} else {
   console.log('Something is Missing');
}