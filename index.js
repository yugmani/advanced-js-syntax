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
// /*
function myGreet(name) {
  console.log(`Hello ${name || 'unknown'} !`);
}

myGreet('Keshar');  //Hello Keshar !
myGreet("");  //Hello unknown !
myGreet();  //Hello unknown !
myGreet(null);  //Hello unknown !
myGreet(undefined);   //Hello unknown !
// */

