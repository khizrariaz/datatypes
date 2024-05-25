//ru following cmd to run includes
//tsc --module es6 --target esnext include.ts
//node include.js
//tsc --module es6 --target esnext include.ts && node include.js
// include returns true or false. 

let number : number[]= [10,11,12,13]
let isExist = number.includes(13)
console.log(isExist); //true


let fav_fruit : string[] = ["Apple","Banana","Mango"]
let list = fav_fruit.includes("strawberry")
console.log(list) //false


let flowers : string[] = ["rose","lily","brasica"]
if(flowers.includes("tree")){
    console.log("I like tree");

} else if (flowers.includes("lily")){
    console.log("I like lily");

}else if(flowers.includes("brasica")){
    console.log(" I have brasica");

}else{
    console.log("i want all flowers");
}
//I like lily

//generic types. apply on classes. object an array

let num : number[]= [1,2,3,4,5,]
let chars : string[]= ["A","B","C","D"]
let bools: boolean[]= [true, false];

function isExistInList<type>(item: type, list: type[]): boolean {
  return list.includes(item);
}
console.log(isExistInList<string>("H", chars)); //false
console.log(isExistInList<number>(2, num));   //tru
console.log(isExistInList<boolean>(false, bools));  //tru

//log ki type <string> func li <type> me jakr save hogi

let games : string[]= ["ps1","rings","ludo"]
let oddNum : number[] = [1,3,5,7,9]
let evenNum : number[] =[0,2,4,6,8,]

function gameNum<all>(characters : all, num : all[] ) : boolean {
 return num.includes(characters)
}
//[] i.e num inludes k bahir ayga or singl thing jo check krni h include k parethesis me aygi
//q k [] me c single valu chk krni h whether present or absent
 console.log(gameNum<number>(3,oddNum)); //true
 console.log(gameNum<number>(7,evenNum)); //false
 console.log(gameNum<string>("ludo",games)); //true
 
 
