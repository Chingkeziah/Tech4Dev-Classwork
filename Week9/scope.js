// In js we have local and global scope
var uname = "keziah";  //global variable and can be used/called anywhere on our page 
function isname() {
    var fname = "ching";
    console.log(uname)
}
isname();
console.log(fname)   //local variable 
//returns error because fname is defined only inside of our function and cannot be used outside