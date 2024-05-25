// function openDoor (){
//     console.log("open the door");
// }
// openDoor()
//operator =,>,<,+,!=

//if else
// true p if execute hota h. false p else run hota h
let isDoorOpen: boolean = false

if (false) {
console.log("open the door");

}else{
    console.log("close the door");
    
}
// let percentage : number = 80
// let statusOfStudent : string = ""

// if (percentage > 30){
//     statusOfStudent= "pass"
// }else{
//     statusOfStudent="fail"
// }
// console.log(statusOfStudent);

//else if
let myPercentage: number = 80
let statusOfStudent: string= ""
let grade : string = ""

if (myPercentage >= 80){
    grade = "A+"
    statusOfStudent= "pass"

} else if(myPercentage >= 70){
grade = "A"
statusOfStudent= "pass"

}else if (myPercentage>= 60){
grade = "B"
statusOfStudent= "pass"

}else if (myPercentage>= 50){
    grade = "C"
    statusOfStudent= "pass"

}else if (myPercentage>= 40){
    grade = "D"
    statusOfStudent= "pass"

}else if (myPercentage>= 30){
    grade = "E"
    statusOfStudent= "pass"

}else{
    grade= "fail"
}

console.log(grade);
console.log(statusOfStudent);


// let isExist = num.includes(3)
// console.log(isExist);
// include returns true or false. 

// let num : number[]= [1,2,3,4,5,]
// let chars : string[]= ["A","B","C","D"]
// let bools: boolean[]= [true, false];

// function isExistInList<type>(item: type, list: type[]): boolean {
//   return list.includes(item);
// }
// console.log(isExistInList<string>("H", chars));
// console.log(isExistInList<number>(2, num));
// console.log(isExistInList<boolean>(false, bools));