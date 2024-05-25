var fruitName = "Mango";
console.log(fruitName);
//function=jab tak call nai krengy tab tak run ni hoga
function logFruitName() {
    var fruitName = "grapes";
    console.log(fruitName);
}
logFruitName(); //call or invoking the function to run
var carName = "toyota";
function logCarName() {
    console.log(carName);
}
logCarName(); //this is calling structure
var shoesName = "Bata";
function logShoeName() {
    console.log(shoesName);
}
logShoeName();
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
var items = {
    100: "6 eggs",
    200: "bread",
    300: "milk"
};
function buyItem(amount) {
    var itemName = items[amount];
    return itemName;
}
var item1 = buyItem(100);
var item2 = buyItem(200);
var item3 = buyItem(300);
console.log(item1);
console.log(item2);
console.log(item3);
//params=parameter=aPple, gLass, brEad
//return= APPLE, GLASS, BREAD
function convertToUpperCase(data) {
    var stringInUpperCase = data.toUpperCase();
    return stringInUpperCase;
}
var upperCaseData = convertToUpperCase("aPple"); //method 1
console.log(upperCaseData); //method 1
console.log(convertToUpperCase("aPple")); //method 2
console.log(convertToUpperCase("bRead")); //method 2
console.log(convertToUpperCase("gLass")); //method 2
function convertToLowerCase(data) {
    var stringInLowerCase = data.toLowerCase(); //is .toLowerCase ki waja c lowercase hua
    return stringInLowerCase;
}
console.log(convertToLowerCase("aPple")); //method 2
console.log(convertToLowerCase("bRead")); //method 2
console.log(convertToLowerCase("gLass")); //method 2
function makeObject(firstName, lastName, email, phoneNumber) {
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    };
}
var obj1 = makeObject("John", "Doe", "abc@example.com", "12345");
var obj2 = makeObject("John", "Doe", "abc@example.com");
console.log(obj1);
console.log(obj2);
//without return
function addition() {
    var total = 2 + 2;
    console.log(total);
}
addition();
//with return
function substraction() {
    var minus = 5 - 4;
    return minus;
}
var sub = substraction();
console.log(sub);
//multiple value ,, bilal is default value in parethesis
function sum(value1, value2, name) {
    if (name === void 0) { name = "Bilal"; }
    console.log(value1 + value2);
    console.log(name);
}
sum(7, 7, "Ali");
//default value (bilal) lzmi run hogai agr callback nai bhi kren tab b. lekin callbak me new 
//valu call kre (ali) to new nae run hoga default wala
