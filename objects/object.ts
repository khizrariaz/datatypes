//object=> {}  {key: value} , key name is changbl like variable name.pair this is syntex
//to make only 1 variable . 1 person ki sari detail k lye

let user = {
firstName: 'Ali',
lastName : 'Khan',
age : 20,
feeSchedual : {
    Month: "March 2024",
    Amount: 1000
}};
console.log(user.firstName);
console.log('Month: ' + user.feeSchedual.Month +', Amount= ' + user.feeSchedual.Amount)
//Month: March 2024, Amount= 1000..my rzlt


let student1 = {
fullName: 'Example',
classId: 'ABC',
rollNo: 25,
email: 'example@ab.com',
isPassed: true,
subject : ['urdu','english','math']

}

let student2 = {
fullName: 'Example2',
classId: 'ABCD',
rollNo: 26,
email: 'example@abc.com',
isPassed: false,
subject : ['urdu','english','math'],
}

let student3 = {
fullName: 'Example3',
classId: 'ABCDE',
rollNo: 27,
email: 'example@abcd.com',
isPassed: true,
subject : ['urdu','english','math'],
}
console.log(student3.subject);

//making array of obj i.e student 1,2 and 3
 let student = [{student1},{student2},{student3}],
 studentNames = [student1.fullName,student2.fullName,student3.fullName],
 classId = [student1.rollNo, student2.rollNo,student3.rollNo]

console.log(student); 
console.log(studentNames);
console.log(classId);

console.log(student1.subject[1]);
console.log(student2.isPassed);
console.log(student3.subject[0]);
console.log(student3.email);

//if v need multiple student data {roll no, subjects. id etc} then make array of object
//object n array me all datatypes assign hoskti h
//multipe data kisi 1 cheez k lye

let laptop = {
laptopName : 'DEL',
laptopCharges : 60000,
color : 'white',
branded : true,

};
console.log(laptop);

//array of object; [{}]
//array of array; [[]]
// let array = [{},{},[], true,123,'Ali'];
// let obj= {
//     key: {
//         key : {}
//     } 
// // }
// tsc object.ts && node object.js  




