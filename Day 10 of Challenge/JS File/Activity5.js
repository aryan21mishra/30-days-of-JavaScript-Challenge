// Activity 5 => Event Handling

// Task 9
const list = document.querySelector('.list')
list.addEventListener('click', function (e) {
   console.log(e.target.innerText);
})

// Task 10

const div = document.querySelector('.div')
div.addEventListener('click', function () {
   const li = document.createElement('li')
   li.innerText = 'Task 10'
   div.appendChild(li)
})