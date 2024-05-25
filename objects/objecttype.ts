// var students = ["student 1", "student 2"];

interface AddressType {
        streetName: string;
        city: string;
        country: string;
        zipcode:string;
    };

type UserType = {
    firstName: string;
    lastName: string;
    cnicNo: number;
    isStudent: boolean;
    subjects: string[];
    address: AddressType
};

var user: UserType={
    firstName: "Khizra",
    lastName: "Riaz",
    cnicNo:1234,
    isStudent:true,
    subjects: ["English","programming"],
    address: {  
        streetName: "abc",
        city: "Karachi",
        country: "Pakistan",
        zipcode: "123",
    }
}
console.log(user);

//type alias. datatypes ko apni marzi ka nam dena
let laptop: laptopstring = "HP";
type laptopstring = string;
