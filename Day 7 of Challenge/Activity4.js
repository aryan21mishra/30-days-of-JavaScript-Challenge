// Activity 4 => The this keyword

// Task 7

const Books = {
   title: 'Goosebumps',
   author: 'R.L.Stine',
   year: 1992,
   get() {
      return [this.title, this.author]
   },
}

console.log(Books.get());