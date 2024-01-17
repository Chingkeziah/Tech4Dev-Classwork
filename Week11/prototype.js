// prototype chain
var person1 = {
    name: "Keziah",
    question: "who is Gwen",
    location: "earth"
}

var person2 = {
    name: "Keziah",
    verb: "learning",
    age: 20,
}


// constructor prototype
// with an object you can create inheritance
// a prototype in js is a mechanism to add new properties to an object or constructor from another object
// proto can be used on objects, array, functions, booleans, strings, numbers 
function animal(name){
    this.name = name;
}
animal.prototype.speak = function(){
    console.log(this.name + " makes a sound")
}

var cat = new animal("pluto");
cat.speak();
animal(name);
cat

// for example; lets use an array
var car = ["Mercedez" "Lexus" "Jeep"];
