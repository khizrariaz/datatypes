//keyword()  = method
//map is array method n retrn n call krta h 
//shortcut for loop is map
//max 3 parameters can b used in map
//vale n index are parameter
var num = [2, 4, 5, 6];
var elements = num.map(function (value, index) {
    return value * 2;
});
console.log(elements);
//[ 4, 8, 10, 12 ]
//return krny c pehly usko variabe me store kraty h
var fruitNames = ["apple", "babana", "mango"];
var names = fruitNames.map(function (fruit) {
    return fruit + "s are yummy..";
});
console.log(names);
var arr = [1, 2, 3, 4];
var newArray = arr.map(function (element) {
    return element;
});
console.log("original array: ", arr);
console.log("newArray: ", newArray);
var wholeNum = [0, 1, 2, 3, 4, 5];
var wholeNums = wholeNum.map(function (numArr) {
    return numArr * 2;
});
console.log(wholeNums);
//[ 0, 2, 4, 6, 8, 10 ]
var parents = ["my mom", "my dad"];
var myParent = parents.map(function (love) {
    return love + " is the best!";
});
console.log(myParent);
var fruitName = ["banana", "strawberry", "mango"];
var fnames = fruitName.map(function (values) {
    return values + " are so tasty";
});
console.log(fnames);
