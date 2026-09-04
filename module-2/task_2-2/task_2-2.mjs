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

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);