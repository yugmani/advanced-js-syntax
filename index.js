// Import stylesheets
import './style.css';

//1. Nullish Coalescing Operator (??)
// **************************************

//Nullish coalescing operator (??) accepts two values and returns the second value if the first one is “null” or “undefined”.

//basic concept
let operand1;
let operand2 = 200;

let result = operand1;

if (result === null || result === undefined) {
  result = operand2;
}

console.log('Result: ', result); //200

//alternatively
const output =
  operand1 !== null && operand1 !== undefined ? operand1 : operand2;

console.log('Result: ', output); //200

//With nullish coalescing operator
const myResult = operand1 ?? operand2;

console.log('Result: ', myResult); //200

//The nullish coalescing operator, for instance, can be used to define a variable’s default value as follows:
const user = {
  name: 'panda',
  age: 21,
};

const teacher = {
  name: 'keshar',
};

const userAge = user.age ?? 25;
console.log('User age: ', userAge); //21

const teacherAge = teacher.age ?? 30;
console.log('Teacher age: ', teacherAge); //30

//Using nullish coalescing operator inside a function
function greeting(name) {
  console.log(`Hello ${name ?? 'unknown'} !`);
}

greeting('keshar'); //Hello keshar !
greeting(); //Hello unknown !
greeting("");  //Hello !
greeting(null); //Hello unknown !
greeting(undefined); //Hello unknown !

//DIFFERENCE OF NULLISH COALESCEING(??) AND LOGICAL OPERATOR(||)

// ?? - Returns the value of the second if the first operand is nullish

// || - Still returns the first value if it is truthy ( 0 or empty string).

function myGreet(name) {
  console.log(`Hello ${name || 'unknown'} !`);
}

myGreet('Keshar');  //Hello Keshar !
myGreet("");  //Hello unknown !
myGreet();  //Hello unknown !
myGreet(null);  //Hello unknown !
myGreet(undefined);   //Hello unknown !

// 2. Nullish Coalescing Assignment Operator(??=)
// *************************************

//The nullish coalescing assignment operator (??=) is a shorthand version of the nullish coalescing operator (??) that allows you to check if a variable is nullish before assigning a value to it.

// a. Before giving a variable a value, you can use this to see if it is null or undefined. 
// b. The variable will be assigned if it is null or undefined; else, its current value will be retained.

// Setting a default value for a variable like the one below is an effective way of using this operator:
let myAge;  //undefined
myAge ??= 25;

console.log("Age: ", myAge);  //25

let myName = "Siddhi";  //not null or undefined
myName ??= 'unknown';

console.log("Name: ", myName);  //Siddhi


// 3. Logical OR Assignment Operator
// *************************************

//  logical operator accepts two operands and only assigns the right operand to the left operand if the left operand is falsy, otherwise it retains the value of the left operand.

let x, y; 
x ||= y;

//In the syntax (x ||= y), the logical OR assignment operator only assigns y to x if x is falsy.

/*
If you are confused at what a falsy value is, it is nothing but a value that is considered false when encountered in a Boolean context. A falsy (also written as falsey) can be either of the following:

1. false (the Boolean keyword false)
2. 0 (the Number positive zero)
3. -0 (the Number negative zero)
4. 0n (the BigInt zero, also 0x0n)
6. “”, ‘’, `` (an empty string value)
7. null (a data type — the absence of any value)
8. undefined (a data type)
9. NaN (not a number)
10. document.all
*/

let title;

title ||= 'untitled';
console.log("Title: ", title);  //untitled

let title1 = '';

title1 ||= 'untitled';
console.log("Title1: ", title1);  //untitled

let title2 = 'I love JavaScript';
title2 ||= 'untitled';

console.log("Title 2: ", title2); //I love JavaScript

let title3 = null;

title3 ||= 'untitled';
console.log("Title3: ", title3);  //untitled

let title4 = undefined;

title4 ||= 'untitled';
console.log("Title4: ", title4);  //untitled

let title5 = false;

title5 ||= 'untitled';
console.log("Title5: ", title5);  //untitled

