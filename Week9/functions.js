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
 
// creating a new function that sums 
 function sum (x, y){
   return x + y;
 }
 var sumOfTwoNumber = sum(10, 30);
 console.log("the sum of 10 and 30 is " + sumOfTwoNumber);

//  anytime i want to sum two variables i can just call the function and pass in parameters
 sum(40, 20);
 function multiply (a, b, c) {
   return a * b * c;
 }
 var multiplicationOfTwoNumbers = multiply(2, 3, 4);
 console.log("multiplying 3 numbers will give " + multiplicationOfTwoNumbers);