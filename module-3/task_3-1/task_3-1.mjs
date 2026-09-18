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
  }else {
    printOut("Image is to large");
  }
} else {
  printOut("Image is to small!");
}

if(imageUserSize > imageMaxSize){
   printOut("Image is to large"); 
}else if (imageUserSize < imageMinSize){
   printOut("Image is to small!"); 
}else{
    printOut("Thank you");
}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
