//function=jab tak call nai krengy tab tak run ni hoga

function logFruitName() {   
    let fruitName = "cherries";
    console.log(fruitName);
}
logFruitName() //code for run. call to run

let carName = "Corola";
function logCarName() {
    console.log(carName);
}
logCarName() //this is calling structure

let shoesName = "Bata";
function logShoeName(){
console.log(shoesName);
}
logShoeName()

//following condition me let nai lgyga. fun k () me variable bana k place krdye hen thxy no let.
function someName(toyNames, girlsName, boysName, flowerName, leafName ) {
console.log(toyNames, girlsName, boysName, flowerName, leafName);
}
someName ("Doll","Khizra","Bilal","lily","Basil");

function countryNames(Pakistan, Australia,India) {
    console.log(Pakistan, Australia, India);
}
countryNames("Pakistan's Islamabad", "Australia's Melbourne", "India's Dhaka");

 //1st method with let
function cellNames () {
    let cellName = "Samsung";
    console.log(cellName);
}
cellNames();

//2nd method without let
function cellName (Samsung) {
    console.log(Samsung)
}
cellName("Samsung galaxy 25");

//with let. 
let brand = "Philips"
function brandName(){
console.log(brand);
}
brandName();

//practice. in this situation v can call anything bellow in calling line.
function cloth(lawn, cotton,midsummer){
    console.log(lawn, cotton, midsummer);
}
cloth("lawn", "cotton", "midsummer");
cloth("lawn'kurti", "cotton'pajamaz", "midsummer'wear");
cloth("lawn", "cotton", "midsummer");
cloth("1", "2", "3");
cloth("jeans", "shirt", "pant");
cloth("sharara","garara","shirt");