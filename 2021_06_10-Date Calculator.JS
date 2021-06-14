/*

TESTING AND PLAYING

*/


//get Elements
var textOutput = document.getElementById("output");
var userDate = document.getElementById("input_date").value;
var dateToday = document.getElementById("DateToday");

//global declaration
var Now = new Date();
//var userDate1 = new Date(userDate);
var JSoutput;
dateToday.innerHTML = Now;
let diffInDays;






//Functions

showDateToday = (Now) => {dateToday.innerHTML = Now;}

logDates = (Now) => {    
    console.log(`date today is: ${ Now.getDate() }/${ Now.getMonth() +1 }/${ Now.getFullYear() }`);
    console.log(`Full date today is:  ${ Now }`) ;
}



userDate_Format = (userDate) => {
    
    console.log(`date user put in is: ${ userDate }`);
    console.log(`Full date user put in is:  ${new Date (userDate)}`) ;

}


 date_Diff_Calc = (Now, userDate) => {
    let NowMilli = Now.getTime();
    let userDateMilli = userDate.getTime();

    if (Now === NaN || userDate === NaN) {
        var NowNum = Number(Now);
        var userDateNum = Number(userDate);
       } 

    if (userDateMilli < NowMilli) {
        console.error('Date input must be in the future.')
        alert('Date Selected must be ion the future.')
    }

    let diffMili = userDateMilli -NowMilli;
    return diffInDays = (diffMili * 1000) * 60 * 60 * 24;   

 }

//*/


//RESULT
function DisplayOutput() {
    console.log(JSoutput);
    textOutput.innerHTML = JSoutput;
}


// /* INIT FUNC
//ON Load
showDateToday(Now);
logDates(Now);

//Event
let input = document.getElementById("input_date").addEventListener("change", function() {
    DisplayOutput(diffInDays)
}
);