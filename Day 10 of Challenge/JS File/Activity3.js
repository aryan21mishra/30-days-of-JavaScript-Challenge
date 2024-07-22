// Activity 3 => KeyBoard Event

// Task 5
const input = document.querySelector('.input')
input.addEventListener('keydown', function (event) {
   console.log(event.key);
})



// Task 6
const input2 = document.querySelector('.input2')
const para = document.querySelector('.para')
input2.addEventListener('keyup', function (event) {
   if (event.key === 'p') {
      alert(para.innerText)
   }
})