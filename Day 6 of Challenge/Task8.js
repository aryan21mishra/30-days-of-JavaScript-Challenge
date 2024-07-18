// Task 8 => using filter method create a array with even number

let array = [1, 2, 4, 5, 7, 8, 10, 12, 4, 6]
let new_array = array.filter((value) => {
   if (value % 2 == 0) {
      return value
   }
})

console.log(new_array);