//Check to see if script is linked properly.

//"use strict";

console.log("This script is linked properly!")


//Write your JS code here...


function myFunctionAdd() {
    var x = Number(document.getElementById("myNumber1").value);
    var y = Number(document.getElementById("myNumber2").value);
    document.getElementById("result").innerHTML =(x + y);
    }

function myFunctionSubstract() {
    var x = document.getElementById("myNumber1").value;
    var y = document.getElementById("myNumber2").value;
    document.getElementById("result").innerHTML = x - y;
    }

function myFunctionMultiply() {
    var x = document.getElementById("myNumber1").value;
    var y = document.getElementById("myNumber2").value;
    document.getElementById("result").innerHTML = x * y;
    }

function myFunctionDivide() {
    var x = document.getElementById("myNumber1").value;
    var y = document.getElementById("myNumber2").value;
    document.getElementById("result").innerHTML = x / y;
    }


