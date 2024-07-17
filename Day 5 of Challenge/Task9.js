// Task 9 => Write a higher order function that takes  fuction and a value and run many times,

function higherfnc(fun, num) {
   for (let i = 0; i < num; i++) {
      fun()
   }
}

function name() {
   console.log('HEllo');
}

higherfnc(name, 100)