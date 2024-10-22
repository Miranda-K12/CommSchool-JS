'use strict';
/*
1. მომხმარებელს შეყავს წელი. თქვენ უნდა დაადგინოთ არის თუ არა ეს წელი ნაკიანი.
(წელი ნაკიანია თუ ის უნაშთოდ იყოფა 4ზე და არ იყოფა უნაშთოდ 100ზე, ან უნაშთოდ იყოფა 400ზე) 
let year = +prompt('Enter the year');
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  console.log('It is leap year');
} else {
  console.log('It is not leap year');
}
  */
 /*
 2. მომხმარებელს შეყავს 3 რიცხვი,
 თქვენ უნდა დაადგინოთ არის თუ არა რომელიმე მათგანი 2 - ის ან 3 ის ჯერადი(უნაშთოდ იყოფა 2-ზე ან 3ზე) 

let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
let num3 = +prompt('Enter third number');

if (num1 % 2 === 0 || num1 % 3 === 0) {
  console.log(`${num1} is multiple of 2 or 3`);
}
if (num2 % 2 === 0 || num2 % 3 === 0) {
  console.log(`${num2} is multiple of 2 or 3`);
}
if (num3 % 2 === 0 || num3 % 3 === 0) {
   console.log(`${num3} is multiple of 2 or 3`);
} else {
  console.log('none of them is multiple of 2 or 3');
}
  */
 /*
 3. მომხმარებელს შეყავს რიცხვი, კონსოლში გამოიტანეთ 1 დან ამ რიცხვამდე ყველა რიცხვის კვადრატი(გააკეთეთ forთაც და while-თაც)

let number = Number(prompt('Enter the number'));
for (let i = 1; i <= number; i++) {
    console.log(i * i);
} 
let number = Number(prompt('Enter the number'));
let i = 1;
while (i <= number) {
  console.log(i*i);
  i++;
}
  */
/*4. კონსოლში დაბეჭდეთ ისეთი რიცხვები, რომელბიც მოთავსებულია 100 და 100000-ს შორის და უნაშთოდ იყოფა 123-ზე 
for (let i = 100; i <= 100000; i++) {
  if (i % 123 === 0);
  console.log(i);
} */
/*5* მომხმარებელს შეყავს რიცხვი(მინიმუმ 2 ნიშნა).
 კონსოლში დაბეჭდეთ ამ რიცხვის ბოლო ციფრი(მაგ: 25 -ის შემთხვევაში 5, 139 - ის შემთხვევაში 9 და ასე შემდეგ)*/
let number = +prompt('Enter the number(at least 2 digits)');
if (number < 10) {
  console.log('Number must has at least 2 digits');
} if (number % 10 === 0)
  console.log(0);
if (number % 10 !== 0) {
  console.log(number % 10);
}
