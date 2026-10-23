"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function printDate() {
	const dateOption = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	}
  const toDay = new Date();
  printOut(toDay.toLocaleString("no-Nb", dateOption));
	return toDay;
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function calcDaysToGTA(){
	const toDay = printDate();
	const gtaDate = new Date("11/19/2026");
	printOut(gtaDate.toLocaleString("no-Nb"));
	const days = (gtaDate - toDay) / (1000 * 60 * 60 * 24) ;
	printOut(`There is ${Math.floor(days)} days left to GTA - 6 release.`);
}

calcDaysToGTA();

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
