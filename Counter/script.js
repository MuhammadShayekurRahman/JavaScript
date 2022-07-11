"use strict";

const countOutput = document.querySelector("input#numbers");
const countHistory = document.querySelector("#countHistory");
let clickCount = 0;

const addedTen = () => {
    clickCount = clickCount+ 1;
    countOutput.value = parseInt(countOutput.value) + 10;
    const countLog = document.createElement("p");
    countLog.innerText = clickCount + " : Added 10 : " + countOutput.value;
    countHistory.prepend(countLog);
}

const addedFive = () => {
    clickCount = clickCount+ 1;
    countOutput.value = parseInt(countOutput.value) + 5;
    const countLog = document.createElement("p");
    countLog.innerText = clickCount + " : Added 5 : "+ countOutput.value;
    countHistory.prepend(countLog);
}

const minusFive = () => {
    clickCount = clickCount+ 1;
    countOutput.value = parseInt(countOutput.value) - 5;
    const countLog = document.createElement("p");
    countLog.innerText = clickCount + " : Subtracted 5 : " + countOutput.value;
    countHistory.prepend(countLog);
}

const minusTen = () => {
    clickCount = clickCount+ 1;
    countOutput.value = parseInt(countOutput.value) - 10;
    const countLog = document.createElement("p");
    countLog.innerText = clickCount + " : Subtracted 10 : "+ countOutput.value;
    countHistory.prepend(countLog);
}

const reset = () => {
    clickCount = clickCount+ 1;
    countOutput.value = 0;
    const countLog = document.createElement("p");
    countLog.innerText = clickCount + " : Cleared";
    countHistory.prepend(countLog);
}