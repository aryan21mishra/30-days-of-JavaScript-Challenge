// Activity 2 => Creating and Appending element

// Task 3
const div = document.createElement('div')
div.innerText = 'Task3'
div.style.fontSize = '30px'
document.body.prepend(div)

// Task 4
const li = document.createElement('li')
li.innerText = 'Task4'
li.style.fontSize = '20px'
const list = document.querySelector('.list').append(li)

