/*
_______________________________

TESTING AND PLAYING
_______________________________

*/

//get Elements
var textOutput = document.getElementById("output");
var userDate = document.getElementById("input_date").value;
var dateToday = document.getElementById("DateToday");

//Global declaration
var Now = new Date();
var JSoutput;
var diffInDays;


//Functions
showDateToday = (Now) => {dateToday.innerHTML = Now;}

logDates = (Now) => {    
    console.log(`Small date today is: ${ Now.getDate() }/${ Now.getMonth() +1 }/${ Now.getFullYear() }`);
    console.log(`Full date today is:  ${ Now }`) ;
}

userDate_log = (userDate) => {
    console.log(`Input date user put in is: ${ userDate }`);
    console.log(`Full date user put in is:  ${ userDate }`) ;
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
 
 userDateTransformation = (userDate) => {
    userDate = new Date(userDate);
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
    userDate_log(userDate);
    userDateTransformation(userDate);
    date_Diff_Calc(Now, userDate);
    DisplayOutput(diffInDays);
}
);