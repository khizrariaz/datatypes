let message1 : string = "Khizra"
 console.log(message1)
 
let message2 : string = "123";
 console.log(message2);

 let personName : string = "Khizra"
// good day khizra, following " " are for creating gaps between.
console.log("Good day, " + personName + "!")

let personAge = 20
 let finalAge: number = personAge + 5;
 console.log(finalAge)

//  string concatenation
let firstname: string = "Khizra";
let secondname: string = "Riaz";
let fullname: string = "Khizra" + " " + "Riaz";
console.log(fullname);

// string
let party : string = "Tuesday";
 console.log(party)

// number
let value: number = 123;
console.log(value);

// boolean
let followingFb: boolean = false;
console.log(followingFb);

// undefined and null can be the subtype of all datatype
// null. null is empty
let box : null = null;
console.log(box);

let value2 : undefined = undefined;
console.log(value2);


let randomValueLink: any = "https://github.com/panaverse";
console.log(randomValueLink);

// camelCase
let userName = 'Khizra' //cameCase
let user_name = 'Khizra' //snake_case
let UserName = 'Khizra' //PascalCase

//is assignment operator. it saves the value of leftside to the rightside's variable. 

let isUserExist = true;
let is_user_name = false;
let IsStudentName = 'Ali';
console.log(userName, user_name, UserName); //for line 2,3 and 4
console.log(isUserExist, is_user_name, IsStudentName); 

//array =>[] from 0 to onwords , addres is index. location of data.. for multiple datatypes
 let studentsAre= ['Noman','Ali','Naeem'];  //no gap seprated by comma only.. rule
  console.log(studentsAre);

//any[]= for multiple datatypes
let students: any[] = ['Noman','Ali','Naeem',1,2,true];  
let firstName = students[0];
console.log(students);
console.log(firstName);
//5 is location index[] of 5th student if v need the name of 5th student.
console.log(students[5]);
console.log(students[1]);

//string[] = for plural string values use []
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

let userNam: string = 'Ali';
userNam = 'Danyal';  //for update string value. change Ali to Danyal

//to change banana into grapes. update string value
let newFruits: string[]= ['apple','banana','orange','kiwi'];
newFruits[1]='grapes'
console.log(newFruits);


