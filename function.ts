let fruitName = "Mango";
console.log(fruitName);


//function=jab tak call nai krengy tab tak run ni hoga
function logFruitName() {   
    let fruitName = "grapes";
    console.log(fruitName);
}
logFruitName() //call or invoking the function to run

let carName = "toyota";
function logCarName() {
    console.log(carName);
}
logCarName() //this is calling structure

let shoesName = "Bata";
function logShoeName(){
console.log(shoesName);
}
logShoeName()


//following condition me let nai lgyga. fun k () me variable bana k place krdye hen thxy no let.
//this is parameter

function someName(toyNames, girlsName, boysName, flowerName, leafName) {
    console.log(toyNames, girlsName, boysName, flowerName, leafName);
}
someName("Doll", "Khizra", "Bilal", "lily", "Basil");

//salt = 2 //parameter =salt= ques ,,, 2=argument=ans
//parameter and argument
//para effects inner functionality
//para is kind of variable that stores data
//utility function or method--to use built in method like uppercase or lowercase
//() to call
//reusable functionality= same data ko barbar call krskty hen

//creat a func that take amount as an argument()
//and return any item name
//i.e obj={100: "6 eggs", 200: "bread", 300:"milk"}
const items={
    100: "6 eggs",
    200: "bread",
    300:"milk"
} 
function buyItem (amount: number): string {
    const itemName = items[amount];
    return itemName;

}

const item1  = buyItem(100);
const item2  = buyItem(200);
const item3  = buyItem(300);
console.log(item1);
console.log(item2);
console.log(item3);

//params=parameter=aPple, gLass, brEad
//return= APPLE, GLASS, BREAD

function convertToUpperCase(data: string):string {
const stringInUpperCase = data.toUpperCase();
return stringInUpperCase;

}
let upperCaseData = convertToUpperCase("aPple"); //method 1
console.log(upperCaseData); //method 1

console.log(convertToUpperCase("aPple")); //method 2
console.log(convertToUpperCase("bRead")); //method 2
console.log(convertToUpperCase("gLass")); //method 2

function convertToLowerCase(data: string):string {
    const stringInLowerCase = data.toLowerCase(); //is .toLowerCase ki waja c lowercase hua
    return stringInLowerCase;
    
}
console.log(convertToLowerCase("aPple")); //method 2
console.log(convertToLowerCase("bRead")); //method 2
console.log(convertToLowerCase("gLass")); //method 2


// make func that will take lastname, email, phone num(optional)
//return object with firstName, lastName, email, phoneNumber

interface User{
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: string
}

function makeObject(firstName: string,
    lastName: string,
    email: string,
    phoneNumber?:string): User {
return {
    firstName,
    lastName,
    email,
    phoneNumber
}
}
const obj1 = makeObject("John", "Doe", "abc@example.com", "12345");
const obj2 = makeObject("John", "Doe", "abc@example.com");
console.log(obj1);
console.log(obj2);


//without return
function addition () {
    let total= 2+2
    console.log(total);
    
}
addition();

//with return
function substraction(){
    let minus = 5-4
    return minus
}
let sub= substraction()
console.log(sub);

//multiple value ,, bilal is default value in parethesis
function sum (value1: number, value2: number, name: string = "Bilal"){
console.log(value1 + value2);
console.log(name);

}
sum(7,7, "Ali")
//default value (bilal) lzmi run hogai agr callback nai bhi kren tab b. lekin callbak me new 
//valu call kre (ali) to new nae run hoga default wala