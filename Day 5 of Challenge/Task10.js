// Task  10 => Write a higher order function that takes two fuction and a value

function higherorder(x, y, value) {
   return y(x(value))
}

function A(num) {
   return num + 2
}

function B(result) {
   return result
}

console.log(higherorder(A, B, 3));