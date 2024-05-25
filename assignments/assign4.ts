//type and interf are 2types of object used to give name and type during coding

//interface = object type= use to give type of the object whether string or else
//exampl 1 with interface
interface bike {
    company : string;
    color : string [];
    wheels : number;
    type : string;
    engine : string;
    brandDetails : brandDetails;
}
//obj types for brand details
interface brandDetails {
        price : string;
        origin : string;
        manufacturer : string;
       }

       //exampl 2 with type
//type = object type = use to give type of the object whether string or else
type biketype= {
company : string;
color : string  [];
wheels : Number;
type : string;
engine : string;
brandDetails : brandDetails
}

//let bike : biketype = {
let bike : bike = {
   company : 'Honda',
   color : ['black','silver','white'],
   wheels : 2,
   type : 'heavy',
   engine : '700cc',
   brandDetails : {
    price : "1lac",
    origin : "branded",
    manufacturer : "Pakistani"
   }
}
console.log(bike);