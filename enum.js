//enums=  lecture from sir zia repo
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0 index
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log(colorName);
//ans= green. bcs index no is changed now. red index 1 krdi h. green ka index 2 hua
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 10] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
var pendingState = "LOADING" /* LoadingState.PENDING */;
var completedState = "LOADED" /* LoadingState.COMPLETED */;
console.log("LOADING" /* LoadingState.PENDING */ === "LOADING"); //true
console.log("LOADED" /* LoadingState.COMPLETED */ === "LOADED"); //true
//typealias= type myBirds = string
var myBirds;
(function (myBirds) {
    myBirds[myBirds["sparrow"] = 0] = "sparrow";
    myBirds[myBirds["eagle"] = 1] = "eagle";
    myBirds[myBirds["parrot"] = 2] = "parrot";
})(myBirds || (myBirds = {}));
var birdName = myBirds.sparrow; //ans=0 sparrow on 0 index
console.log(birdName);
var secbirdName = myBirds.parrot; //ans=2 parrot on 2 index
console.log(secbirdName);
