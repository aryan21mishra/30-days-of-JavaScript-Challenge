// Task 7=> check a year is leap year or not

let year = 3000

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
   console.log(year, 'is leap year');
} else {
   console.log(year, 'is not leap year');
}