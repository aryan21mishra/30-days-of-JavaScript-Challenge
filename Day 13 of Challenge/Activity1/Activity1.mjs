// Activity 1 => Creating And Exporting Modules

// Task 1

function add(a, b) {
   return a + b
}

// Task 2
let person = {
   name: 'Aryan',
   age: 19,
   profession: 'Developer',
   get: () => {
      return person.name
   }
}

export { add, person }