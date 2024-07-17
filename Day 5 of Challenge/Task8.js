// Task 8 => Write a function that takes the person name and age. Provide the drfault to age.

function greeting(name, age = 3) {
   return `WELCOME ${name}`
}

console.log(greeting('Aryan'));