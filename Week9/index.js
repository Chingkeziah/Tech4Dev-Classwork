/* javascript is one of the most popular and widely used programing and scripting language in the world right now
it is commonly used to create interactive effects within web browsers. it was originally designed
to run only on browser. however, in 2009, Ryan Doll took the open source javascript engine in chrome and 
imbedded it inside a c++ program called node. with the help of node, we can now run javascript code outside of 
a browser.
Ecmascript is a specification which defines standards for scripting languages while javascript is a programing 
language which confirms to this specification
*/

console.log('hello world');

// this refers to a statement which is a piece of code that expresses an action to be carried out and it must be terminated by a semi colon(;)
// what we have in the single quotes is called a string which is a sequence of characters

// variables
// variables are used to store data temporally in a computers memory and give that memory location a name
// before es6 we used var keyword to declare a variable but going forward from es6, the best practice is to use the let keyword to declare a variable

let name = 'keziah';
console.log(name);

// by default, variables in javascript are undefined

/* rules for naming variables
- you cannot use a reserved keyword for example; let, if, else
- they should be meaningful. what is the purpose of the variable?
- they cannot start with a number e.g, 1name;
- they cannot contain a space or hyphen( -)
- if you want to declare multiple variables, you can declare them on one line and use commas to separate them
   but the modern best practice is to declare each variable on a single line.
*/

// constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
// when you run this, you'll notice that the browser ignored the first rate and logged the second. There are however situation where we dont want the 
// value of a variable to change. In such a situation, we use const. you cant reassign a const  

// data types i.e primitive and reference types
// primitive types
// string, number, boolean, undefined, null
let middleName = 'nyoh'; //string literal
let age = 20; //number literal
let isApproved = true; //boolean literal
let lastName; //undefined
let selectedColor = null; //used in situations where you want to clear the value of a variable

// reference types
// object, arrays, functions
let person = {
   // object literal
   name: 'keziah',
   age: 30
};
// you can change the value of the variable either by using the dot or bracket notation
person.name = 'john'; //dot notation

person['name'] = 'mary'; //bracket notation
console.log(person);

// arrays
let selectedColors = ['red', 'blue']; //[] array literal
console.log(selectedColors);
// each element has an index which determines its position in an array. the index of the first element is usually 0
// console.log(selectedColors[0]); using this will display only the first element in the array
// you can expand the array by using the syntax below
// selectedColors[2] = 'green';

// functions
// a function is a set of statements which performs a task or calculates a value
function greet(name) { //name is a parameter
   console.log('hello ' + name);
}
greet('John'); //indicates a statement while john is an arguement

// types of functions
// performing a task is what has been used above

// calculating a value
// use ctrl l to clear your console

function square(number) {
   return number + number;

}
// let number = square(2);
// console.log(number);
// make this shorter by using 
console.log(square(2));