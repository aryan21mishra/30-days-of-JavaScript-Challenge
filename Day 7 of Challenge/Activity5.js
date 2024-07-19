// Activity 5 => Object iterarton

// Task 8
const Books = {
   title: 'Goosebumps',
   author: 'R.L.Stine',
   year: 1992,
}

for (const key in Books) {
   console.log(key, ':', Books[key]);
}

// Task 9
console.log(Object.keys(Books));
console.log(Object.values(Books));