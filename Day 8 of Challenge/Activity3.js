//Activity 3 => Spread and Rest operator

// Task 6
const array = [1, 2, 3, 4, 5]
const new_array = [...array]

console.log(new_array);

// Task 7

function sum(...num) {
   return num.reduce((num, current_num) => {
      let sum = num + current_num
      return sum

   })
}
console.log(sum(1, 2, 3, 4, 5));