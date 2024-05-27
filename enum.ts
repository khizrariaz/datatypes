//enums=  lecture from sir zia repo

enum Color {Red, Green, Blue};//starts with 0 index
var c: Color = Color["Green"]; //Color.Green
console.log(c); //ans=1

enum laptop {hp, del =13, mac}
let laptopName: laptop = laptop.mac
console.log(laptopName); //14 index
//to get index no. type enum k name wali use hogi i.e latop

enum laptops{hps, dels, macs}
let laptopNames : string = laptops[2]
console.log(laptopNames); //macs
//index no p jo name h usko get krny lye type ka name likhna h string


enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);
//ans= green. bcs index no is changed now. red index 1 krdi h. green ka index 2 hua

enum Color2 {Red = 1, Green = 2, Blue = 10};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

// ans= 10

enum flowers {rose= 10, lily, jasmine}
let index: flowers = flowers.jasmine
console.log(index); //12

enum animals {dog, cat , bat}
let ani : string= animals[1]
console.log(ani); //cat


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

enum parfume{strong= "blue lady", mild= "mildew", weak= "farnes"}
 let par: parfume= parfume["strong"]// parfume.strong
    console.log(par);
    //jab values deden to index no. nai aty values print hoti hen like "blue lady"

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
    


        
