"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");


const wakeUpTime = 6;
const time = 7;
if (wakeUpTime === time) {
  printOut("Take the bus!");
} else if (time === 8) {
  printOut("Take the train!");
} else {
  printOut("Take the car!");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
const part4Number = 0;
if (part4Number > 0) {
  printOut("The number is positive.");
} else if (part4Number < 0) {
  printOut("The number is negative.");
} else {
  printOut("The number is zero!");
}

printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------");
const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize}`);
if (imageUserSize >= imageMinSize) {
  if (imageUserSize <= imageMaxSize) {
    printOut("Thank you");
  } else {
    printOut("Image is to large");
  }
} else {
  printOut("Image is to small!");
}

if (imageUserSize > imageMaxSize) {
  printOut("Image is to large");
} else if (imageUserSize < imageMinSize) {
  printOut("Image is to small!");
} else {
  printOut("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut({monthName});
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You don't need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
switch(monthName){
  case "January":
  case "Mars":
  case "Mai":
  case "Juli":
  case "August":
  case "October":
  case "December":
    printOut("31 Days in month.");
    break;
  case "February":
    printOut("28 Days in month.");
    break;
  default:
    printOut("30 Days in month.");
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if(monthName === "March" || (monthName === "May")){
  printOut("Sorry, the gallery is closed!");
}else if( monthName === "April"){
  printOut("Sorry, Main gallery is closed, your are welcome into the premiss next dor!");
}else{
  printOut("Welcome to mu gallery! ❤️");
}




printOut(newLine);
