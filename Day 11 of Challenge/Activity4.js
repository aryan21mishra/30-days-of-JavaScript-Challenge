// Activity 4 => Feyching Data from Api

// Task 6

const task6 = new Promise((resolve, reject) => {
   try {
      fetch('https://api.imgflip.com/get_memes')
         .then(response => response.json())
         .then(data => resolve(data))
   } catch (error) {
      reject(error)
   }
}).then(data => console.log(data))
   .catch(error => console.log('The error will be', error))


// Task 7
const task7 = async function () {
   let response = await fetch('https://api.imgflip.com/get_memes')
   const data = await response.json()
   console.log(data);
}
task7()