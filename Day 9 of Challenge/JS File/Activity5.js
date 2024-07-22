// Activity 5 => Event Handling

// Task 9
const paragraph = document.querySelector('.para')
const button = document.querySelector('.btn')

button.addEventListener('click', function () {
   paragraph.innerText = 'TASK 9'
})

// Task 10

const div = document.querySelector('.div')
div.addEventListener('mousemove', function () {
   div.style.borderColor = 'blue'
})