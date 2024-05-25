//Literal Types: data types that are restricted to specific literal values. 
//union type: allows a variable to hold one of several different types
//Union types define using the pipe (|) symbol between the types you want to include
var dir = "north"; //literal type
console.log(dir);
//north
// let dir: Direction = "up";  // Error: Type '"up"' is not assignable to type 'Direction'.
var value;
value = "Hello"; // OK
// value = 42;      // OK
console.log(value);
// value = true;   // Error: Type 'boolean' is not assignable to type 'string | number'.
var unionType; //uniontype
var literalType; //literal type ...this will save & only this data will run
literalType = "Riaz";
// literalType = 9999
// literalType = true
console.log(literalType);
//add 0 befor singl digit
// let hours: number | string | boolean = 8; //hours=8 
// if (hours < 10) {
//     hours = `0${hours}`
// }
// console.log(hours);
//ans= 0.8
//Math.random()= Returns/ generates a pseudorandom number between 0 and 1.
var randomNum = Math.random(); //0-1
console.log(randomNum);
var normalVar = randomNum > 0.6 ? "Fahim" : 5;
//0.6 c greater valu jab generate hogi tab fahim[string run hoga].0.6 c less p string run nai hoga
if (typeof normalVar === "string") {
    console.log(normalVar.toUpperCase());
}
else { //type number
    if (normalVar < 10) {
        normalVar = "0".concat(normalVar);
        console.log(normalVar);
    }
    else {
        console.log(normalVar);
        //if normalVar 2 digit me hoti to wo yaha print hoti like 10 n soo on
    }
}
