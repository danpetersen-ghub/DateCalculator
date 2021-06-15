/*
_______________________________

TESTING AND PLAYING
_______________________________

*/

//get Elements
var textOutput = document.getElementById("output");
var dateToday = document.getElementById("DateToday");

//Global declaration
var Now = new Date();
var JSoutput;
var diffInDays;


//Functions
showDateToday = (date) => {dateToday.innerHTML = date;}

logDates = (date) => {    
    console.log(`Small date is: ${ date.getDate() }/${ date.getMonth() +1 }/${ date.getFullYear() }`);
    console.log(`Full date is:  ${ date }`) ;
}

 date_Diff_Calc = (Now, userDate) => {
    let NowMilli = Now.getTime();
    let userDateMilli = userDate.getTime();
    let diffInDays;

    if (Now === NaN || userDate === NaN) {
        var NowNum = Number(Now);
        var userDateNum = Number(userDate);
       } 

    if (userDateMilli < NowMilli) {
        console.error('Date input must be in the future!')
        alert('Date Selected must be ion the future!')
    }

    let diffMili = userDateMilli - NowMilli;
    diffInDays = (diffMili * 1000) * 60 * 60 * 24;
    console.log(diffInDays);
    return DisplayOutput(diffInDays);  

 }
 
 dateTransformation = (date) => {
    date = new Date(date);
   logDates(date);
   return date;
 } 

function DisplayOutput(diffInDays) {
    
    JSoutput = diffInDays;
    //console.log(JSoutput);
    textOutput.innerHTML = JSoutput;
}


// /* INIT FUNC
//ON PAGE LOAD
showDateToday(Now);
logDates(Now);


//Events
let input = document.getElementById("input_date").addEventListener("change", function() {
    var userDate = document.getElementById("input_date").value;
    
    dateTransformation(userDate);
    /*
    logDates(userDate);
    date_Diff_Calc(Now, userDate);
    DisplayOutput(diffInDays); 
    */
}
);