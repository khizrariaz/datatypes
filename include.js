//tsc --module es6 --target esnext include.ts
//node include.js
// include returns true or false. 
let number = [10, 11, 12, 13];
let isExist = number.includes(13);
console.log(isExist); //true
let fav_fruit = ["Apple", "Banana", "Mango"];
let list = fav_fruit.includes("strawberry");
console.log(list); //false
let flowers = ["rose", "lily", "brasica"];
if (flowers.includes("tree")) {
    console.log("I like tree");
}
else if (flowers.includes("lily")) {
    console.log("I like lily");
}
else if (flowers.includes("brasica")) {
    console.log(" I have brasica");
}
else {
    console.log("i want all flowers");
}
//generic types. apply on classes. object an array
let num = [1, 2, 3, 4, 5,];
let chars = ["A", "B", "C", "D"];
let bools = [true, false];
function isExistInList(item, list) {
    return list.includes(item);
}
console.log(isExistInList("H", chars));
console.log(isExistInList(2, num));
console.log(isExistInList(false, bools));
//log ki type <string> func li <type> me jakr save hogi
let games = ["ps1", "rings", "ludo"];
let oddNum = [1, 3, 5, 7, 9];
let evenNum = [0, 2, 4, 6, 8,];
function gameNum(characters, num) {
    return num.includes(characters);
}
//[] i.e num inludes k bahir ayga or singl thing jo check krni h include k parethesis me aygi
console.log(gameNum(3, oddNum)); //true
console.log(gameNum(7, evenNum)); //false
console.log(gameNum("ludo", games)); //true
