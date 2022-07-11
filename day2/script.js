'use strict';

function hypotenuse(a, b){
    return (Math.sqrt((a*a)+(b*b)));
}

let age;

function checkAge(age){
    if (age<18){
        console.error("Underage");
    }else if(age>=65){
        console.log("Unsatisfied");
    }else{
        console.log("Satisfied")
    }
}

add = (a , b) => a + b;

function addEx2(a , b){
    return a + b;
}

// The above two methods are the same, the first is now more commonly used


let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]
console.log(carPark);

let num = [1,2,3,4,5,6,7,8,9,10];

let a = Array(); // an empty array called a
let b = Array(10); //array containing 10 empty spaces called b
let c = Array("Tom","Dick","Harry"); // array containing 3 elements called c
// short hand for creating arrays
let cShortHand = ["Tom","Dick","Harry"]; //shorthand using [] around each elment and seperated by a comma.
let d = [1,2,3,4,5];

let classRoom = Array(4);
classRoom[0] = "John";
classRoom[3] = "Simran";

console.info(classRoom[0]); // will return John
console.info(classRoom[2]); // will return undefined
console.info(classRoom[3]); // will return Simran.


