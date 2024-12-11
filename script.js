// 1. Write a program that displays current date and time in your browser.

// var currentDate = new Date();
// document.write(currentDate); 
// document.write("<hr>");

// 2. Write a program that alerts the current month in words.
// For example December.

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var currentMonth = date.getMonth();
// var currentMonthName = monthName[currentMonth];
// document.write(`Current month: ${currentMonthName}`);
// document.write("<hr>");

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// var date = new Date();
// var currentDay = date.getDay();
// var currentDayName = dayName[currentDay];
// alert(`Today is ${currentDayName}`);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var date = new Date();
// var day = date.getDay();
// if(day === 0 || day === 6){
//     alert("It’s Fun day");
// }
// else{
//     alert("It's a regular day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date();
// var currentDate = date.getDate();

// if(currentDate < 16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var date = new Date();
// document.write(`Current Date: ${date} <br>`);
// var miliSeconds = date.getTime();
// document.write(`Elapsed milliseconds since January 1, 1970: ${miliSeconds} <br>`);
// var minutes = miliSeconds /(1000 * 60);
// document.write(`Elapsed minutes since January 1, 1970: ${minutes}`);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var time = date.getHours();
// if(time < 12){
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let laterDate = new Date(2020, 11, 31);
// document.write(`Later date : ${laterDate}`);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let startingDate = new Date(2015, 5, 18);
let currentDate = new Date();

let startTime = startingDate.getTime();
let currentTime = currentDate.getTime();

let timeDifference = currentTime - startTime;

let numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
document.write(Math.floor(numberOfDays)+ " days have passed since 1st Ramadan, 2015");
document.write("<hr>")


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

let refrenceDate = new Date(2015, 11, 5, 22, 50, 16);
let startDate = new Date(2015, 0, 1);

let startingTime = startDate.getTime();
let refrenceTime = refrenceDate.getTime();

let differenceMiliSec = refrenceTime - startTime;
let differenceInSec = Math.floor(differenceMiliSec / 1000);

document.write(`On refrence date ${refrenceDate} ${differenceInSec} seconds had passed since beginning of 2015.`);
document.write("<hr>");

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let newDate = new Date(2015, 11, 5, 23, 9, 37);
let todayDate =  new Date(newDate);
newDate.setFullYear(newDate.getFullYear()- 100);

document.write(`current date: ${todayDate} \n100 years back, it was: ${newDate}`);
document.write("<hr>");


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// let userAge = prompt("Please enter your age?");
// let birthYear = new Date().getFullYear();

// let result = birthYear - userAge;
// document.write(`Your age is ${userAge} <br> Your birth year is ${result}`);
// document.write("<hr>");


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// let customerName = prompt("What is your name?");
// let currentMonth = prompt("Please enter current month");
// let numberOfUnits = +prompt("Please enter number of units?");
// let chargesPerUnits = +prompt("Please enter charges per unit?");
// let netAmout = numberOfUnits * chargesPerUnits;
// let latePayment = 350;
// let grossAmount = netAmout + latePayment;
// document.write(`<h1> K-Eectric Bill </h1> <br> 
// Customer Name : <b>${customerName}</b> <br>
// Month : <b>${currentMonth}</b> <br>
// Number of units : <b>${numberOfUnits}</b> <br>
// Charges per unit : <b>${chargesPerUnits}</b> <br>
// Net Amount Payable (within Due Date): <b>${netAmout}</b> <br>
// Late payment surcharges : <b>${latePayment}</b> <br>
// Gross Amount Payable (after Due Date): ${grossAmount}
// `);