//  Increment and decrement
// The increment and decrement operators are used to increase or decrease the value of a variable by 1
//  The increment operator is ++
//  The decrement operator is - 

// Both operators can be used in two ways which is prefix and postfix
// 1. Prefix increment and decrement operator
// a. Prefix increment
// Let's use an example to demonstrate
let b = 10;
console.log(++b);
console.log(b);
// imageee
// Notice how the value of b is incremented by one and the new value of b is printed. You'll also see that the operator is displayed before the value, this is what is known as prefix increment
// b. Prefix decrement
// let b = 10;
console.log(--b);
console.log(b);
// 2. Postfix increment and decrement operator
// a. Postfix increment 
// Here, the operator is added after the variable and the value of the variable is used before it is incremented. That is, the current value of a is printed before it's new value. For example;
let a = 10;
console.log(a++);
console.log(a);
// imageeee
// b. Postfix decrement 
// let a = 10;
console.log(a--);
console.log(a);


// basic increment and decrement calculation
var x = 5;
x = x + 5;
x++
// returns 10
x++
// returns 11 
// ++ and -- first of all return the value before performing the action when you input it again
x += 1
12
x -= 1
11
//however, += and -= perform the action immediately
// for example
x = 3
y = x++
y += 1
4
// y += 1 returned 4 because x++ first of all returned the same value while += performed the action immediately

