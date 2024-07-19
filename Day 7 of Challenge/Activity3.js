// Activity 3 => Nested Objects

// Task 5
const Library = {
   name: 'City Library',
   books: [
      {
         title: "To Kill a Mockingbird",
         author: "Harper Lee",
         year: 1960
      },
      {
         title: "1984",
         author: "George Orwell",
         year: 1949
      },
      {
         title: "The Great Gatsby",
         author: "F. Scott Fitzgerald",
         year: 1925
      },
      {
         title: "Pride and Prejudice",
         author: "Jane Austen",
         year: 1813
      },
      {
         title: "The Catcher in the Rye",
         author: "J.D. Salinger",
         year: 1951
      }
   ]
}

console.log(Library);


// Task 6

console.log('The name of the library is:', Library.name);

Library.books.forEach((obj, index) => {
   console.log(`The title of ${index + 1} books is:`, obj.title);
})