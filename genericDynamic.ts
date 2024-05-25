//code ko change nai krna prega. gene type short krta h code ko . qk bar bar rewrite c long hota h code
//dynamically typescript different types khud assign krdega 
//types miss nai hongi. any islye use nai kia k types define nai hoti usmy different types use kro to 
function fanName (fan : string) : string {
return fan
}
fanName("pakfan");

function genericfunction <T>(element: T): T{
    return element
}
genericfunction("dataof any type will be write")
genericfunction(1223)
genericfunction(true)
genericfunction({age: 70})
genericfunction([1,2,3,4,5,6])
//T is convention but can b use other words.
//hover n look argument me differ types pass ki thi. TS sab types khud batara h
//warna hmy differ types k lye alg alg types dekr func banana prta