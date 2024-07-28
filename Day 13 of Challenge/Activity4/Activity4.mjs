import _ from 'lodash'
import axios from 'axios';

// Task 6
const array = [12, 3, 445, 4]
const reverseArray = _.reverse(array)
console.log(reverseArray);

// Task 7

axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(response => console.log(response))
   .catch(error => console.log(error))