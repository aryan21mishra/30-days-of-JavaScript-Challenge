// Activty 5 => Concurrent Promise

//Task 8
let promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 1 is resolved');
   }, 1000)
})
let promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 2 is resolved');
   }, 2000)
})
let promise3 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 3 is resolved');
   }, 3000)
})
let promise4 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 4 is resolved');
   }, 4000)
})

Promise.all([promise1, promise2, promise3, promise4])
   .then((result) => {
      result.map((message) => console.log(message))
   })


//Task 9

let promise5 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 5 is resolved');
   }, 1000)
})
let promise6 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 6 is resolved');
   }, 200)
})
let promise7 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 7 is resolved');
   }, 100)
})
let promise8 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Promise 8 is resolved');
   }, 2000)
})

Promise.race([promise5, promise6, promise7, promise8])
   .then((result) => console.log(result))