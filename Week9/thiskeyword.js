/*In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.*/
const list = {
    fellow1: "Racheal",
    fellow2: "Aishat",
    fellow3: "Mutinta",
    fellow4: "Keziah",
     classRep: function (){
       return this.fellow1 + " is the class rep"
    }
}
list.classRep();