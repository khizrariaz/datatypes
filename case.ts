// camelCase
let userName = 'Khizra' //cameCase
let user_name = 'Khizra' //snake_case
let UserName = 'Khizra' //PascalCase

//is assignment operator.  it saves the value of leftside to the rightside's variable. 

let isUserExist = true;
let is_user_name = false;
let IsStudentName = 'Ali';

console.log(userName, user_name, UserName); //for line 2,3 and 4
console.log(isUserExist, is_user_name, IsStudentName); //for line 8,9, and 10

//array =>[] from 0 to onwords , addres is index. location of data.. for multiple datatypes
// let students = ['Noman','Ali','Naeem'];  //no gap seprated by comma only.. rule
// console.log(students);

//any[]= for multiple datatypes string+number+boolean etc at the same time
let students: any[] = ['Noman','Ali','Naeem',1,2,true];  
let firstName = students[0];
console.log(students);
console.log(firstName);
//5 is location index[] of 5th student if v need the name of 5th student.
console.log(students[5]);
console.log(students[1]);

//string[] = for plural string values
let fruits: string[]= ['apple','banana','orange','kiwi'];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits[1],fruits[3]);

//array of number
let oddNumber : number[]=[1,3,5,7,9];
console.log(oddNumber[2], oddNumber[4]);

//array of boolean
let booleanValueIs : boolean[]=[true,false]
console.log(booleanValueIs[1]);

let userNam: string = 'ali';
userNam = 'danyal';  //for update string value. change Ali to Danyal
//to change banana into grapes. for update string value

let newFruits: string[]= ['apple','banana','orange','kiwi'];
newFruits[1]='cherry'
console.log(newFruits);


//tsc case.ts && node case.js


