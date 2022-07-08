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


