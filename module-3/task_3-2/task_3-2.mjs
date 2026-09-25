"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Use "for" loops to generate two lines on the HTML page.
One should count from 1 to 10, and the other should count from 10 to 1.
Use only two lines to print the rows.
*/
let task1Line = "Line 1: ";
for (let i = 1; i <= 10; i++) {
  task1Line += i + " ";
}
printOut(task1Line);
task1Line = "Line 2: "; // Reset the variable for the second
for (let i = 10; i >= 1; i--) {
  task1Line += i + " ";
}
printOut(task1Line);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
