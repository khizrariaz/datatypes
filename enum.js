//enums=  lecture from sir zia repo
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0 index
var c = Color["Green"]; //Color.Green
console.log(c); //ans=1
var laptop;
(function (laptop) {
    laptop[laptop["hp"] = 0] = "hp";
    laptop[laptop["del"] = 13] = "del";
    laptop[laptop["mac"] = 14] = "mac";
})(laptop || (laptop = {}));
var laptopName = laptop.mac;
console.log(laptopName); //14 index
//to get index no. type enum k name wali use hogi i.e latop
var laptops;
(function (laptops) {
    laptops[laptops["hps"] = 0] = "hps";
    laptops[laptops["dels"] = 1] = "dels";
    laptops[laptops["macs"] = 2] = "macs";
})(laptops || (laptops = {}));
var laptopNames = laptops[2];
console.log(laptopNames); //macs
//index no p jo name h usko get krny lye type ka name likhna h string
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
// ans= 10
var flowers;
(function (flowers) {
    flowers[flowers["rose"] = 10] = "rose";
    flowers[flowers["lily"] = 11] = "lily";
    flowers[flowers["jasmine"] = 12] = "jasmine";
})(flowers || (flowers = {}));
var index = flowers.jasmine;
console.log(index); //12
var animals;
(function (animals) {
    animals[animals["dog"] = 0] = "dog";
    animals[animals["cat"] = 1] = "cat";
    animals[animals["bat"] = 2] = "bat";
})(animals || (animals = {}));
var ani = animals[1];
console.log(ani); //cat
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
var parfume;
(function (parfume) {
    parfume["strong"] = "blue lady";
    parfume["mild"] = "mildew";
    parfume["weak"] = "farnes";
})(parfume || (parfume = {}));
var par = parfume["strong"]; // parfume.strong
console.log(par);
