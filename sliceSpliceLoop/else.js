// function openDoor (){
//     console.log("open the door");
// }
// openDoor()
//operator =,>,<,+,!=
//if else
// true p if execute hota h. false p else run hota h
var isDoorOpen = false;
if (false) {
    console.log("open the door");
}
else {
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
var myPercentage = 80;
var statusOfStudent = "";
var grade = "";
if (myPercentage >= 80) {
    grade = "A+";
    statusOfStudent = "pass";
}
else if (myPercentage >= 70) {
    grade = "A";
    statusOfStudent = "pass";
}
else if (myPercentage >= 60) {
    grade = "B";
    statusOfStudent = "pass";
}
else if (myPercentage >= 50) {
    grade = "C";
    statusOfStudent = "pass";
}
else if (myPercentage >= 40) {
    grade = "D";
    statusOfStudent = "pass";
}
else if (myPercentage >= 30) {
    grade = "E";
    statusOfStudent = "pass";
}
else {
    grade = "fail";
}
console.log(grade);
console.log(statusOfStudent);
// let isExist = num.includes(3)
// console.log(isExist);
// include returns true or false. 
var num = [1, 2, 3, 4, 5,];
var chars = ["A", "B", "C", "D"];
var bools = [true, false];
function isExistInList(item, list) {
    return list.includes(item);
}
console.log(isExistInList("H", chars));
console.log(isExistInList(2, num));
console.log(isExistInList(false, bools));
