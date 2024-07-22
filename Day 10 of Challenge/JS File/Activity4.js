// Activity 4 => Form event

// Task 7
const form = document.querySelector('form')
const input = document.querySelector('input')
const select = document.querySelector('#gender')
form.addEventListener('submit', function (e) {
   e.preventDefault()
   console.log(input.value);
   console.log(select.value);
})


// Task 8
const para = document.querySelector('.para')
select.addEventListener('change', function (obj) {
   para.innerText = `Gender: ${obj.target.value}`
})