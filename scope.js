//scope= boundry in wch items are accessible
//shadowing is in var only= last value run. new value replaces old value of same var name
//var functional scope boundry
//let= acces in its own block scope
//
var a = 10; //globl scope
function getValue() {
    var a = 100;
    if (true) { //by default true rkhdia taky execute hojay
        var a = 60; //let a= 100 ans = 100 not 200. bcs let apny block me e chlyga
    }
    //ans=200 in var
    console.log(a);
}
getValue();
//hoisting= variable top of the file jakr declr hojayga n its value bcm undefine
// console.log(fullname);
// var fullname="mango"
// //undefine. in var when console run b4 declaration= variable formation
// console.log(fullnam);
// let fullnam="grape"
// Block-scoped variable 'fullnam' used before its declaration.
//const n let me hoiting is having same behavior
var pet = {
    name: "cat",
    legsCount: 4,
    tail: true,
    color: "white"
};
var petDog = {
    name: "dog",
    legsCount: 4,
    tail: true,
    color: "black"
};
function petFactory(name, legsCount, tail, color) {
    return {
        name: name,
        legsCount: legsCount,
        tail: tail,
        color: color
    };
}
var petCat = petFactory("Cat", 4, true, "black");
var petDog1 = petFactory("Dog", 4, true, "puple");
console.log(petCat, petDog1);
