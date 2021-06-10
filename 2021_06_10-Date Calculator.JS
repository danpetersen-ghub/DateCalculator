/*

TESTING AND PLAYING

*/


//get elements
var textOutput = document.getElementById("output");
var userDate = document.getElementById("input_date").value;
var dateToday = document.getElementById("DateToday");

//global declaration
var Now = new Date();
//var userDate1 = new Date(userDate);
var JSoutput;
dateToday.innerHTML = Now;


// VERRSION 2
/* Event
let input = document.getElementById("input_date").addEventListener("change", function() {
    if (Now === NaN || userDate1 === NaN) {
        var NowNum = Number(Now);
        var userdateNum = Number(userDate1);
       }
     //
     console.log(Now + userDate)   
   // 
   textOutput.innerHTML =  userDate1 - Now;
}
);
// */

// /* VERRSION 1
//Event
let input = document.getElementById("input_date").addEventListener("change", function(Now) {
    date_format();
    //inputcalc();
    //DisplayOutput()
    console.log(`date input is: ${ userDate }`);
    date_Diff_Calc();
    console.log(`Difference in days is: ${ diffInDays }`);
}
);


//Functions

function date_format(Now) {
    var day = this.Now.getDate();
    var month = this.Now.getMonth();
    var year = this.Now.getFullYear();
    var Now = `${ year  }-${ month }-${ day }`
    console.log(`date today is: ${ Now }`);
}
 
function inputcalc(Now, userDate) {
   if (Now === NaN || userDate === NaN) {
    var NowNum = Number(Now);
    var userDateNum = Number(userDate);
   } 
   var  date_diff =  Now - userDate;
    console.log(`calculated date is ${ date_diff }`);
    if (date_diff < 0) { 
         alert("please enter date in the furture");
    }
}

 date_Diff_Calc = (Now, userDate) => {
    if (Now === NaN || userDate === NaN) {
        var NowNum = Number(Now);
        var userDateNum = Number(userDate);
       } 
    var nowMili = Date.parse(Now);
    console.log(nowMili);
    var userDateMili = Date.parse(userDate);
    console.log(userDateMili);

    if (userDateMili < nowMili) {
        console.error('Date input must be in the future.')
        alert('Date Selected must be ion the future.')
    }

    diffMili = userDateMili - nowMili;
    
    return diffInDays = (diffMili * 1000) * 60 * 60 * 24;   

 }

//*/


//RESULT
function DisplayOutput() {
    console.log(JSoutput);
    textOutput.innerHTML = JSoutput;
}
