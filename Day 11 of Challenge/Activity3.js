// Activity 3 => Asyn and Await


// Task 4
const task4 = async function () {
   let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({ ueser: 'Aryan', gmail: 'aryan@yaahoo.com' })
      }, 1000)
   })
   const data = await promise
   return data
}
task4().then(data => console.log(data))

// Task 5

const task5 = async function () {
   try {
      let mess = await Promise.reject(new Error('something went wrong'))
   } catch (error) {
      console.log("The error will be:", error);
   }
}

task5()