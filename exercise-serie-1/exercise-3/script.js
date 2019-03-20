//Check to see if script is linked properly.

//"use strict";

console.log("This script is linked properly!")


//Write your JS code here...


function myFunctionReset() {
    document.getElementById("myVilain").reset;
  }

function Results(r) {

    DispWin = window.open('','myWin', 'toolbar=no,status=no,width=900,height=500');
    
    message = "<ul><li><b>NAME: </b>" + document.getElementById("name").value;
    message += "<li><b>POWERS: </b>" + document.getElementById("powers").value;
    message += "<li><b>MOTIVATION: </b>" + document.getElementById("motivation").value;
    message += "<li><b>PLAN: </b>" + document.getElementById("plan").value + "</ul>";
    DispWin.document.write('<title>Mr Super Vilains Data</title>');
    DispWin.document.write(message);

    document.write("<h3>This is a copy of your data:</h3>" + "<br>");
    document.write(message);
    

    var f = document.getElementById('myVilain');
        f.parentNode.removeChild(f);

}


