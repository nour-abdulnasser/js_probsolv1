/* arrays, "shortcuts" like min(), max(), pow(), etc
   are not used in this exercise */


/* **************** Q1 **************** */
/* 1- Write a program that allow to user enter number then print it */

// var x = prompt('please enter a number');
// console.log(x);

/* **************** END Q1 **************** */



/* **************** Q2 **************** */
/* 2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */

// var x = prompt("please enter a number");
// modThree = x%3;
// modFour = x%4;

// if (modThree == 0 && modFour == 0){
//     console.log("yes");
// } else {
//     console.log("nope");
// }

/* **************** END Q2 **************** */



/* **************** Q3 **************** */
/* 3- Write a program that allows the user to insert 2 integers then print the max */

// var x = Number(prompt("please enter the first number"));
// var y = Number(prompt("please enter the second number"));

// if (x > y){
//     console.log(`${x} is the bigger number`);
// } else if (y > x)  {
//     console.log(`${y} is the bigger number`);
// } else {
//     console.log('you entered the same number twice')
// }

/* **************** END Q3 **************** */



/* **************** Q4 **************** */
/* 4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive. */

// var x = Number(prompt('please enter a number'));

// if (x < 0 ){
//     console.log('negative');
// } else if (x > 0) {
//     console.log('positive');
// } else if (x == 0) {
//     console.log('neither positive nor negative');
// } else {
//     console.log('not a number');
// }

/* **************** END Q4 **************** */



/* **************** Q5 **************** */
/* 5- Write a program that take 3 integers from user then print the max element
and the min element.*/

// var x = Number(prompt("please enter the first number"));
// var y = Number(prompt("please enter the second number"));
// var z = Number(prompt("please enter the third number"));

// console.log(`numbers entered: ${x}, ${y}, ${z}`);

// if (x > y && x > z){
//     console.log(`max element = ${x}`);
// } else if (x < y && x < z ){
//     console.log(`min element = ${x}`);
// }
// if (y > x && y > z){
//     console.log(`max element = ${y}`);
// } else if (y < x && y < z ){
//     console.log(`min element = ${y}`);
// }
// if (z > y && x < z){
//     console.log(`max element = ${z}`);
// } else if (z < y && x > z ){
//     console.log(`min element = ${z}`);
// }

// // two if conds rather than 3

// if (x > y && x > z){
//     console.log(`max element = ${x}`);
// } if (y > x && y > z){
//     console.log(`max element = ${y}`);
// } if (z > y && x < z){
//     console.log(`max element = ${z}`);
// }

// if (x < y && x < z ){
//     console.log(`min element = ${x}`);
// }
//  else if (y < x && y < z ){
//     console.log(`min element = ${y}`);
// }
//  else if (z < y && x > z ){
//     console.log(`min element = ${z}`);
// }

/* **************** END Q5 **************** */



/* **************** Q6 **************** */
/* 6- Write a program that allows the user to insert integer number then
check If a number is oven or odd */

// var x = Number(prompt('please enter a number'));
// var modTwo = x%2;

// switch (modTwo) {
//     case 0:
//         console.log('even');
//         break;
//     case 1:
//         console.log('odd');
//         break;
//     default:
//         console.log('invalid entry');
//         break;
// }

/* **************** END Q6 **************** */



/* **************** Q7 **************** */
/* Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant */

// var x = prompt('please enter a letter');
// letter = x.toLocaleLowerCase();

// if (letter == 'o' || letter == 'a' || letter == 'e' || letter == 'u' || letter == 'i' ){
//     console.log(`${x} is a vowel`);
// } else {
//     console.log(`${x} is consonant`);
// }
// // does not account for non-letter and multiple-lettered entries

/* **************** END Q7 **************** */



/* **************** Q8 **************** */
/* Write a program that allows user to insert integer then print all numbers between 1 to
that’s number */

// var x = Number(prompt('please enter a number'));

// for (var i = 0; i <= x; i++){
//     console.log(i);
// }
// missing: concatenate numbers into one string

/* **************** END Q8 **************** */



/* **************** Q9 **************** */
/* Write a program that allows userto insert integerthen print a multiplication table up to 12. */

// var x = Number(prompt('please enter a number'));

// for (var i = 1; i <= 12; i++){
//     console.log(i*x);
// }

/* **************** END Q9 **************** */



/* **************** Q10 **************** */
/* Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
between 1 to this number */

// var x = Number(prompt('please enter a number'));

// for (var i = 2; i < x; i+=2){
//     console.log(i);
// }


/* **************** END Q10 **************** */



/* **************** Q11 **************** */
/* Writeaprogramthattaketwointegersthenprintthepower */

// var x = Number(prompt('please enter a base number'));
// var y = Number(prompt('please enter the exponent'));

// console.log(x**y);


/* **************** END Q11 **************** */



/* **************** Q12 **************** */
/* 12- Write a program to enter marks of five subjects and calculate total, average and
percentage. */

// let tot = 0;
// let percentage = (tot/500)*100 ;

// for (let i = 0; i < 5; i++ ){
//     let x = Number(prompt(`enter mark ${i+1}`));
//     // console.log(x);
//     tot = tot + x;    
// }

// console.log(`the total is `, tot);
// console.log(`the average is `, tot/5);
// console.log(`the average is ${percentage}%`);

/* **************** END Q12 **************** */



/* **************** Q13 **************** */
/* 13-Write a program to input month number and print number of days in that
month. */

// var x = Number(prompt('enter number of month'));
// var b;

// switch (x){
//    case 1:
//       b = 31;
//       break;
         
//    case 2:
//       b = '28 or 29';
//       break;
         
//    case 3:
//       b = 31;
//       break;
         
//    case 4:
//       b = 30;
//       break;
         
//    case 5:
//       b = 31;
//       break;
         
//    case 6:
//       b = 30;
//       break;
         
//    case 7:
//       b = 31;
//       break;
         
//    case 8:
//       b = 31;
//       break;
         
//    case 9:
//       b = 30;
//       break;
         
//    case 10:
//       b = 31;
//       break;
         
//    case 11:
//       b = 31;
//       break;

//    case 12:
//       b = 31;
//       break;
// }
// console.log(b);

/* **************** END Q13 **************** */


/* **************** Q14 **************** */
/* Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade */

var grade1 = prompt('enter your physics grade');
var grade2 = prompt('enter your chem grade');
var grade3 = prompt('enter your bio grade');
var grade4 = prompt('enter your maths grade');
var grade5 = prompt('enter your computer grade');

if (grade1 >= 90){
   grade1 = 'A';
} else if (grade1>=80){
   grade1 = 'B';
} else if (grade1>=70){
   grade1 = 'C';
} else if (grade1>=60){
   grade1 = 'D';
} else if (grade1>=40){
   grade1 = 'E';
} else if (grade1<40){
   grade1 = 'F';
}

if (grade2 >= 90){
   grade2 = 'A';
} else if (grade2>=80){
   grade2 = 'B';
} else if (grade2>=70){
   grade2 = 'C';
} else if (grade2>=60){
   grade2 = 'D';
} else if (grade2>=40){
   grade2 = 'E';
} else if (grade2<40){
   grade2 = 'F';
}


if (grade3 >= 90){
   grade3 = 'A';
} else if (grade3>=80){
   grade3 = 'B';
} else if (grade3>=70){
   grade3 = 'C';
} else if (grade3>=60){
   grade3 = 'D';
} else if (grade3>=40){
   grade3 = 'E';
} else if (grade3<40){
   grade3 = 'F';
}


if (grade4 >= 90){
   grade4 = 'A';
} else if (grade4>=80){
   grade4 = 'B';
} else if (grade4>=70){
   grade4 = 'C';
} else if (grade4>=60){
   grade4 = 'D';
} else if (grade4>=40){
   grade4 = 'E';
} else if (grade4<40){
   grade4 = 'F';
}


if (grade5 >= 90){
   grade5 = 'A';
} else if (grade5>=80){
   grade5 = 'B';
} else if (grade5>=70){
   grade5 = 'C';
} else if (grade5>=60){
   grade5 = 'D';
} else if (grade5>=40){
   grade5 = 'E';
} else if (grade5<40){
   grade5 = 'F';
}


console.log('your physics grade is', grade1);
console.log('your chem grade is', grade2);
console.log('your bio grade is', grade3);
console.log('your maths grade is', grade4);
console.log('your computer grade is', grade5);



































