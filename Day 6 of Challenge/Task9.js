// Task 7 => using reduce method calculate the sum of number in array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = array.reduce((value, currentValue) => {
   let sum = value + currentValue
   return sum
})

console.log(result);