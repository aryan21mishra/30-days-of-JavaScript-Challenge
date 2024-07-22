// Activity 1 => Basic Event Handling

// Task 1
const paragraph = document.querySelector('.para')
const button = document.querySelector('.btn')

button.addEventListener('click', function () {
   paragraph.innerText = 'TASK 1'
})


// Task 2
const img = document.querySelector('.img')
img.addEventListener('dblclick', function () {
   img.style.visibility = 'hidden'
})