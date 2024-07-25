//Activity 4 => Error Handling in Promise

// task 6

let promise = new Promise((resolve, reject) => {
   let error = false
   if (!error) {
      reject('Something went wrong')
   } else {
      resolve('There is no error')
   }
}).then((data) => {
   console.log(data);
}).catch((error) => {
   console.log('Error:', error);
})

// Task 7
async function nothing() {
   let promise = new Promise((resolve, reject) => {
      let error = false
      if (!error) {
         reject('Something went wrong')
      } else {
         resolve('There is no error')
      }
   })
   try {
      let data = await promise
   } catch (error) {
      console.log('Error:', error);
   }
}

nothing()