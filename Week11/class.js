class Car {
    constructor(model) {
    this.model = model;
    }
    start()  {
        console.log(this.model + "is starting")
    }
}
 
// lets extend the class to add more parameters
// class has been extended to add a color.
// we created a new class called coloredcar and used the extends keyword to extend car which was the first class we created
// we could as well have passed in color as a parameter in the first class but we used this method to get introduced to new keywords i.e; extends and super
class ColouredCar extends Car {
    constructor(model, color) {
    super(model) // super is used to indicate that model was inherited from the parent class
    this.color = color;
    }
CarColor(){
    console.log("i hav a " + this.color + "" + this.model + "SUV")
    }
}

let myCar = new ColoredCar("Mercedes GLE Coupe", "Black");
myCar.start(); //inhereits the method of start
myCar.CarColor(); //creates new method