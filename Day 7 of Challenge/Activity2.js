// Activity 2 => Objects Methods

// Task 3

const Books = {
   title: 'Goosebumps',
   author: 'R.L.Stine',
   year: 1992,
   get: () => {
      return [Books.title, Books.author]
   },
   update: (year) => {
      Books.year = year
   }
}

console.log(Books.get());

//Task 4

Books.update('1992-present')

console.log(Books);