// Task 4=> using switch case assign a grade on the basis of score

let marks = 87
switch (true) {
   case marks <= 93 && marks === 100:
      console.log('A');
      break;
   case marks >= 90 && marks <= 92:
      console.log('A+');
      break;
   case marks >= 87 && marks <= 89:
      console.log('B+');
      break;
   case marks >= 83 && marks <= 86:
      console.log('B');
      break;
   case marks >= 80 && marks <= 82:
      console.log('B-');
      break;
   case marks >= 77 && marks <= 79:
      console.log('C+');
      break;
   case marks >= 73 && marks <= 76:
      console.log('C');
      break;
   case marks >= 70 && marks <= 72:
      console.log('C');
      break;
   case marks >= 67 && marks <= 69:
      console.log('D+');
      break;
   case marks >= 65 && marks <= 66:
      console.log('D');
      break;
   case marks < 65:
      console.log('F');
      break;

   default:
      break;
}