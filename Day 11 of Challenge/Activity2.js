// Activity 2 => Chaining of Promise


// Task 3
let promises = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log('Promise Task 3');
      resolve({ user: 'Aryan', gmail: 'aryan@.yaahoo' })
   }, 2000)
}).then((data) => {
   console.log(data);
   return new Promise((resolve, reject) => {
      resolve({ age: 12 })
   })
}).then((data) => {
   console.log(data);
})