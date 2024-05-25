//enums=  lecture from sir zia repo

enum Color {Red, Green, Blue};//starts with 0 index
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);
//ans= green. bcs index no is changed now. red index 1 krdi h. green ka index 2 hua

enum Color2 {Red = 1, Green = 2, Blue = 10};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

// ans= 10

const enum LoadingState {
    PENDING = "LOADING",
    COMPLETED = "LOADED"
}
let pendingState: LoadingState = LoadingState.PENDING;
let completedState: LoadingState = LoadingState.COMPLETED;

console.log(LoadingState.PENDING === "LOADING"); //true
console.log(LoadingState.COMPLETED === "LOADED"); //true

//typealias= type myBirds = string

enum myBirds {
    sparrow,
    eagle,
    parrot
}
let birdName: myBirds = myBirds.sparrow ; //ans=0 sparrow on 0 index
console.log(birdName);

let secbirdName: myBirds = myBirds.parrot ; //ans=2 parrot on 2 index
console.log(secbirdName);


const enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
    }
    //type logs = "ERROR" | "WARN" | "INFO" | "DEBUG"    
    type logs = keyof typeof LogLevel;
    
    const enum trafficSignal {
        RED = "Red",
        YELLOW = "Yellow",
        GREEN = "Green"
    }
    type light = keyof typeof trafficSignal
        