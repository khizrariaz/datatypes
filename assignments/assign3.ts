//object=> {}  {key: value} , key name is changbl like variable name.pair this is syntex
//to make only 1 variable . 1 person ki sari detail k lye

let shoe = {
    shoeType: 'Heels',
    forAge : 20,
    newArrivals : {
        Month: "January 2024",
        Amount: 50000
    }};

    console.log(shoe.shoeType);
    console.log('Month: ' + shoe.newArrivals.Month +', Amount: ' + shoe.newArrivals.Amount)


    let chefOne = {
    fullName: "Iqbal Ali" ,
    classId: '111',
    rollNo: 25,
    email: 'chefOne@ab.com',
    foodName : ['cake','pizza','cookies'],
    isPassed: true,
    }
    
    let chefTwo = {
    fullName: 'Ali Khan',
    classId: '222',
    rollNo: 26,
    email: 'chefTwo@ab.com',
    isPassed: false,
    foodName : ['buiscuit','pastries','pancake'],
    }
    
    let chefThree = {
    fullName: 'Khizra Riaz',
    classId: '333',
    rollNo: 27,
    email: 'chefThree@ab.com',
    isPassed: true,
    foodName : ['wotons','rolls','breadrolls'],
    }
    //making array of obj i.e chef 1,2 and 3

     let chef = [{chefOne},{chefTwo},{chefThree}],

     chefNames = [chefOne.fullName,chefTwo.fullName,chefThree.fullName],
     classId = [chefOne.rollNo, chefTwo.rollNo,chefThree.rollNo]
    console.log (chefThree.foodName);
    console.log(chef);
    console.log(chefNames, classId);
    console.log(chefOne.rollNo);
    console.log(chefTwo.isPassed);
    console.log(chefThree.email);
  
    

    
    
    
    
    
    