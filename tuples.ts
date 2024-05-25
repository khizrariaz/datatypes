//tuple lecture from w3school web: https://www.w3schools.com/typescript/typescript_tuples.php
//A tuple is a typed array with a pre-defined length and types for each index.

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'hello'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

//ans= [ 5, false, 'hello', 'Something new and wrong' ]

let a : [string] =["A"]
a.push ("B");
console.log(a);

let alpha: [number, boolean, string];
alpha= [50,true, "hi"];

alpha.splice(1,2) //index 1 c del strt hoga, 2= no of elemet remove
console.log(alpha);
//[ 50 ]

