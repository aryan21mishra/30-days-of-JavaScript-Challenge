// Task 7 => Write a function that takes two parameter and return their product. Provide the default the value to the second paramter.

function products(num1, num2 = 4) {
   return num1 * num2
}

console.log('The product of two number is', products(3));
console.log('The product of two number is', products(3, 2));