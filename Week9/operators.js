// operators in Javascript
// these are symbols used to perform operations on operands.
// operands refer to the values and variables 
// for example 
10 + 4;
// 10 and 4 are operands while + is an operator

// lists of operators
// Arithmetic operators
// comparison operators
// Logical operators
// assignment operators

// Arithmetic operators
// here are multiple arithmetic operators these are;
// addition
let sum = 7 + 9
console.log(sum);

// + can also be used for concatenation or type coercion
2 + 2 //= 2;
2 + '2' //= "22";
/*It is important to note that, in JavaScript, there are rules to  type coercion. These are;
If either operand is a string, the other will be converted to a string.
If either operand is a number, the other operand is converted to a number. Reading this actually doesn't make sense given our previous rule right??? Let me explain 

b = 1;
typeof(b);
b == true;
typeof(true);
typeof(b);
image
If either operand is a boolean, the other would be converted to a number.

true = 1;
false = 0;
If either operand is null or undefined, one must be converted to the other to return a boolean value.?*/

// substraction
let y = 5 - 7
console.log(y);

// multiplication
let x = 8 * 3
console.log(x);

// division
let f = 12 / 3
console.log(f);

// modulus or remainder
let j = 17 % 4;
console.log(j); 

// exponentiation
let n = 2 ** 4 //2x2x2x2
console.log(n); 

// Assignment Operators
// these are used to assign values to variables
//  = simple assignment
let v = 5;
// =+ addition assignment
v += 3;
//  -= subtraction assignment
v -= 3;
//  *= multiplication assignment
v *= 3;
//  /= division assignment
v /= 3;
// modulus assignment
v %= 3;
// exponentiation assignment
v **= 3;

// comparison operators
// these operators compare two values and return a boolean vaue of either true or false
// can be used in decision making and loop programing in js
// < (less than)

let z = 5;
let c = 10;
console.log(z<c);

// > (greater than)
console.log(z>c);

// <= (less than or equal to)
console.log(z<=c);

// >= (greater than or equal to)
console.log(z>=c);

// == (equal checks , checks the equality of two values)

// != (inequality) (not equal) (flipped value of equal checks)
// === (strict equality checks) (checks the data type too)
// !== (strict inequality (!==) (flipped value strict inequality check)

// logical operators
// && AND
// || OR
// ! NOT












