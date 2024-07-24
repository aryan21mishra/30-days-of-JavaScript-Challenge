// Activity 1 => Understanding Promises

// Task 1
let task1_promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log('The Task 1 Promise');
      resolve()
      reject()
   }, 2000);

})
   .then(() => console.log('Promise is resolved'))
   .catch(() => console.log('The Promise is rejected'))


// Task 2
const task2_promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      let error = true
      if (!error) {
         resolve()
      } else {
         reject()
      }
   }, 2000);
})
   .then(() => console.log('The Task 2 Promise is resolve'))
   .catch(() => console.log('the Task 2 error is solved'))