"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Use JavaScript to calculate the following expression, ensuring the result is -34:
// 
const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + (3 * 2 - 4) * 6";
const part1Answer = 2 + (3 * 2 - 4) * 6;
printOut(orgMatExp);
printOut(newMathExp);
printOut(part1Answer);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Convert 25 metres and 34 centimeters to inches.
An inch is 25.4 millimeters (maximum 2 decimal places in the answer). */

// This is with help variables.
const oneInch = 25.4 // millimeters
const metersInMillimeters = 25 * 1000;
const centimetersInMillimeters = 34 * 10;
const millimeters = metersInMillimeters + centimetersInMillimeters
const inches = millimeters / oneInch;
printOut(`25 meters = ${inches.toFixed(2)} inches`);

// This is without help variables.
const inches_2 = ((25*1000 + 34*10) / 25.4).toFixed(2); 
printOut (`25 meters = ${inches_2} inches`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes.
   (Not allowed to use date objects).
   The task must be solved with primitives.
*/
const part3DaysInMinutes = 3 * 24 * 60;
const part3HoursInMinutes = 12 * 60;
const part3Minutes = 14;
const part3SecondsInMinutes = 45 / 60;
const part3TotalMinutes = part3DaysInMinutes + part3HoursInMinutes + part3Minutes + part3SecondsInMinutes;
printOut(`3 days, 12 hours, 14 minutes, and 45 seconds = ${part3TotalMinutes} minutes`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* 
  Convert 6,322.52 minutes to days, hours, minutes, and seconds.
  (Not allowed to use date objects).
  The task must be solved with primitives.
*/
const part4TotalMinutes = 6322.52;
let part4Calc = part4TotalMinutes / (60 * 24); // Convert minutes to days
const part4Days = Math.floor(part4Calc); // Get the whole number of days
part4Calc = (part4Calc - part4Days) * 24; // Convert the remaining fraction of a day to hours
const part4Hours = Math.floor(part4Calc); // Get the whole number of hours
part4Calc = (part4Calc - part4Hours) * 60; // Convert the remaining fraction of an hour to minutes
const part4Minutes = Math.floor(part4Calc); // Get the whole number of minutes
const part4Seconds = Math.round((part4Calc - part4Minutes) * 60);

printOut(`6,322.52 minutes = ${part4Days} days, ${part4Hours} hours, ${part4Minutes} minutes, and ${part4Seconds} seconds`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Convert 54 dollars to Norwegian kroner, and print the price for both:
   NOK → USD and USD → NOK.
   Use 76 NOK = 8.6 USD as the exchange rate.
   The answer must be in whole "Kroner" and whole "Dollars".
*/
const part5USD = 54;
const part5USDExchangeRate = 76 / 8.6; // NOK per USD
const part5NOK = part5USD * part5USDExchangeRate; // Convert USD to NOK
printOut(`54 USD = ${Math.round(part5NOK)} NOK`);
const part5NOKExchangeRate = 8.6 / 76; // USD per NOK
const part5USDFromNOK = part5NOK * part5NOKExchangeRate; // Convert NOK back to USD
printOut(`${Math.round(part5NOK)} NOK = ${Math.round(part5USDFromNOK)} USD`);
// You should get the same amount of USD as you started with.

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Create a variable that contains the following text:
   "There is much between heaven and earth that we do not understand."
* Print the number of characters in the text.
* Print the character at position number 19.
* Print the characters starting at position number 35 and 8 characters forward.
* Print the index at which "earth" starts in the text.
*/
const part6Text = "There is much between heaven and earth that we do not understand.";
printOut(part6Text);
let part6Calc = part6Text.length;
printOut(`Number of characters: ${part6Calc}`);
part6Calc = part6Text.charAt(19);
printOut(`Character at position 19: ${part6Calc}`);
part6Calc = part6Text.substring(35, 35 + 8);
printOut(`Characters starting at position 35 and 8 characters forward: ${part6Calc}`);
part6Calc = part6Text.indexOf("earth");
printOut(`Index at which "earth" starts: ${part6Calc}`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*
Comparison, print the values for the following expressions (evaluate whether the statements are true)
* Is 5 greater than 3?
* Is 7 greater than or equal to 7?
* Is "a" greater than "b"?
* Is "1" less than "a"?
* Is "2500" less than "abcd"?
* "arne" is not equal to "thomas".
* (2 equals 5) is this statement true?
* (2 is not equal to 5) is this statement true?
* ("abcd" is greater than "bcd") is this statement false?
*/
let part7Calc1 = 5 > 3;
printOut(`Is 5 greater than 3? ${part7Calc1}`);
part7Calc1 = 7 >= 7;
printOut(`Is 7 greater than or equal to 7? ${part7Calc1}`);
part7Calc1 = "a" > "b";
printOut(`Is "a" greater than "b"? ${part7Calc1}`);
part7Calc1 = "1" < "a";
printOut(`Is "1" less than "a"? ${part7Calc1}`);
part7Calc1 = "2500" < "abcd";
printOut(`Is "2500" less than "abcd"? ${part7Calc1}`);
part7Calc1 = "arne" !== "thomas";
printOut(`Is "arne" not equal to "thomas"? ${part7Calc1}`);
part7Calc1 = (2 === 5) === true;
printOut(`Is 2 not equal to 5? ${part7Calc1}`);
part7Calc1 = ("abcd" > "bcd") === false;
printOut(`Is "abcd" greater than "bcd"? ${part7Calc1}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* 
Convert and print the following expressions:
* from text "254" to a number
* from text "57.23" to a number
* from text "25 kroner" to a number
*/
let part8Calc = parseInt("254");
printOut(`From text "254" to a number: ${part8Calc}`);

part8Calc = parseFloat("57.23");
printOut(`From text "57.23" to a number: ${part8Calc}`);

part8Calc = Number("25 kroner");
printOut(`From text "25 kroner" to a number: ${part8Calc} with Number() function`);

part8Calc = parseFloat("25 kroner");
printOut(`From text "25 kroner" to a number: ${part8Calc} with parseFloat() function`);

part8Calc = parseInt("25 kroner");
printOut(`From text "25 kroner" to a number: ${part8Calc} with parseInt() function`);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*
Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
*/
// Using ceil because we want to include 1 and 360 in the range
let r = Math.ceil(Math.random() * 360);
printOut(`Randomly generated number r: ${r} with Math.ceil()`);
// Using floor and adding 1 to include 360 in the range
r = Math.floor(Math.random() * 360) + 1;
printOut(`Randomly generated number r: ${r} with Math.floor()`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* 
Use division (/) and modulus (%) to calculate how many weeks and days are in 131 days.
*/
const part10TotalDays = 131;
let part10calc = part10TotalDays / 7; // Calculate total weeks
part10calc = Math.floor(part10calc); // Get the whole number of weeks
const part10Weeks = part10calc;
const part10Days = part10TotalDays % 7; // Calculate remaining days   
printOut(`In ${part10TotalDays} days, there are ${part10Weeks} weeks and ${part10Days} days.`);

printOut(newLine);