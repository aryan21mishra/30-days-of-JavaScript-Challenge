// Activity 5 => Enhanced object literals

// Task 8

let name = 'Aryan'
let age = 18

const obj = {
   name: name,
   age: age,
   get() {
      return obj.name
   }
}

console.log(obj);

// Task 9

let prop = 'fruit'
let obj1 = {
   [prop]: 'orange'
}

console.log(obj1);