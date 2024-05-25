//keyword()  = method
//map is array method n retrn n call krta h 
//shortcut for loop is map
//max 3 parameters can b used in map
//vale n index are parameter

let num=[2,4,5,6]
    let elements = num.map(function(value, index){
         return value *2
})
console.log(elements);
//[ 4, 8, 10, 12 ]
//return krny c pehly usko variabe me store kraty h

let fruitNames = ["apple","babana","mango"]
 let names = fruitNames.map(function(fruit){
    return fruit + "s are yummy.."
 })
    console.log(names)

 
let arr = [1,2,3,4]
let newArray = arr.map((element) => {
   return element
})
console.log("original array: " , arr);
console.log("newArray: " , newArray);

let wholeNum : number[]= [0,1,2,3,4,5]
 let wholeNums= wholeNum.map( (numArr) => {
return numArr * 2
 }
 )
console.log(wholeNums);
//[ 0, 2, 4, 6, 8, 10 ]

let parents : string[] = ["my mom", "my dad"]
let myParent = parents.map((love)=>{
   return love + " is the best!"
})
console.log(myParent)


let fruitName: string [] = ["banana", "strawberry", "mango"]
let fnames = fruitName.map((values) => {
   return values + " are so tasty"
}
)
console.log( fnames );