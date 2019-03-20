//Check to see if script is linked properly.
//"use strict";
console.log("This script is linked properly!")


function calcAge() {

    var x = parseInt(document.getElementById("birthDay").value);
    var y = parseInt(document.getElementById("birthMonth").value);
    var z = parseInt(document.getElementById("birthYear").value);

    var a = new Date();

        let sysDay = a.getDate() * 1;
        console.log("sysDay: " + sysDay);

        let sysMonth = a.getMonth() + 1;
        console.log("sysMonth: " + sysMonth);

        let sysYear = a.getFullYear() * 1;  
        console.log("sysYear: " + sysYear) ;        
    
        let sysLastYear = a.getFullYear() - 1;
        console.log("sysLastYear: " + sysLastYear);

    var p = new Date(sysLastYear, (y- 1), x);
        let firstDate = p;
        console.log("p= " + p);

    var q = new Date(sysYear, (sysMonth - 1), sysDay);
        let lastDate = p;
        console.log("q= " + q);

    var date_diff_indays = function(date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);

        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
        console.log("q-p= " + date_diff_indays(p, q));
        // console.log(date_diff_indays('12/02/2014', '11/04/2014'));


    if (a.getMonth()+1 <= y) {
       document.getElementById("result").innerHTML = ((a.getFullYear() - z - 1) + " years " + (12 - y + (a.getMonth() + 1)) + " months " + (date_diff_indays(p, q) - 1) + " days ");
    } else {
        document.getElementById("result").innerHTML = ((a.getFullYear() - z) + " years " + (12 - y + (a.getMonth() + 1)) + " months " + (date_diff_indays(p, q) - 1) + " days ");
    }

    alert("Your age: " + (a.getFullYear() - z - 1) + " years " + (12 - y + (a.getMonth() + 1)) + " months " + (date_diff_indays(p, q) - 1) + " days ");

    if ( (x == 29) && (y == 2) && ((z % 4) !== 0) ) {
        alert("You are not born in a leap year; day 28 is the maximum you can enter !!");
        document.getElementById("birthDay").style.backgroundColor = "red";
        document.getElementById("birthDay").style.borderColor = "red";
        console.log( "x-1= " + (x - 1)); 
    } else {
        console.log( "x= " +  x);  
    } 
}


