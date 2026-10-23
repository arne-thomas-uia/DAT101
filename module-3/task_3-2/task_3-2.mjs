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
const task2GuessNumber = 45;
let task2RandomNumber = 0;
while (task2RandomNumber !== task2GuessNumber) {
  task2RandomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + task2RandomNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const task3GuessNumber = 45;
let task3RandomNumber = 0;
let task3Attempts = 0;
let task3TimeStart = Date.now();
while (task3RandomNumber !== task3GuessNumber) {
  task3RandomNumber = Math.floor(Math.random() * 1000000) + 1;
  task3Attempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = task3TimeEnd - task3TimeStart;
printOut(`The random number is: ${task3RandomNumber}`);
printOut(`Number of attempts: ${task3Attempts}`);
printOut(`Time taken: ${task3TimeTaken} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
*/

let primes = "";
for (let i = 2; i <= 200; i++) {
  let isPrime = true;
  let j = i - 1;
  while (isPrime && j > 1) {
    if (i % j === 0) {
      isPrime = false;
    }
    j--;
  }
  if (isPrime === true) {
    primes += " " + i;
  }
}

printOut(primes);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let rowText = "";
for (let row = 1; row <= 7; row++) {
  for (let col = 1; col <= 9; col++) {
    rowText += " K" + col + "R" + row;
  }
  rowText += newLine;
}

printOut(rowText);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const grade1 = Math.round((Math.floor(Math.random() * 236) + 1) / 236 * 100);
const grade2 = Math.round((Math.floor(Math.random() * 236) + 1) / 236 * 100);
const grade3 = Math.round((Math.floor(Math.random() * 236) + 1) / 236 * 100);
const grade4 = Math.round((Math.floor(Math.random() * 236) + 1) / 236 * 100);
const grade5 = Math.round((Math.floor(Math.random() * 236) + 1) / 236 * 100);

if(grade1 <= 40){
    printOut(`Grade 1: F - ${grade1}`);
}else if(grade1 <= 52){
    printOut(`Grade 1: E - ${grade1}`);
}else if(grade1 <= 64){
    printOut(`Grade 1: D - ${grade1}`);
}else if(grade1 <= 76){
    printOut(`Grade 1: C - ${grade1}`);
}else if(grade1 <= 88){
    printOut(`Grade 1: B - ${grade1}`);
}else{
    printOut(`Grade 1: A - ${grade1}`);
}


if(grade2 <= 40){
    printOut(`Grade 2: F - ${grade2}`);
}else if(grade2 <= 52){
    printOut(`Grade 2: E - ${grade2}`);
}else if(grade2 <= 64){
    printOut(`Grade 2: D - ${grade2}`);
}else if(grade2 <= 76){
    printOut(`Grade 2: C - ${grade2}`);
}else if(grade2 <= 88){
    printOut(`Grade 2: B - ${grade2}`);
}else{
    printOut(`Grade 2: A - ${grade2}`);
}

if(grade3 <= 40){
    printOut(`Grade 3: F - ${grade3}`);
}else if(grade3 <= 52){
    printOut(`Grade 3: E - ${grade3}`);
}else if(grade3 <= 64){
    printOut(`Grade 3: D - ${grade3}`);
}else if(grade3 <= 76){
    printOut(`Grade 3: C - ${grade3}`);
}else if(grade3 <= 88){
    printOut(`Grade 3: B - ${grade3}`);
}else{
    printOut(`Grade 3: A - ${grade3}`);
}

if(grade4 <= 40){
    printOut(`Grade 4: F - ${grade4}`);
}else if(grade4 <= 52){
    printOut(`Grade 4: E - ${grade4}`);
}else if(grade4 <= 64){
    printOut(`Grade 4: D - ${grade4}`);
}else if(grade4 <= 76){
    printOut(`Grade 4: C - ${grade4}`);
}else if(grade4 <= 88){
    printOut(`Grade 4: B - ${grade4}`);
}else{
    printOut(`Grade 4: A - ${grade4}`);
}

if(grade5 <= 40){
    printOut(`Grade 5: F - ${grade5}`);
}else if(grade5 <= 52){
    printOut(`Grade 5: E - ${grade5}`);
}else if(grade5 <= 64){
    printOut(`Grade 5: D - ${grade5}`);
}else if(grade5 <= 76){
    printOut(`Grade 5: C - ${grade5}`);
}else if(grade5 <= 88){
    printOut(`Grade 5: B - ${grade5}`);
}else{
    printOut(`Grade 5: A - ${grade5}`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let throwCount = 0;
let hasStraight = false;
let hasTower = false;
let has3Pairs = false;
let hasYatzy = false;

do {
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const d3 = Math.floor(Math.random() * 6) + 1;
  const d4 = Math.floor(Math.random() * 6) + 1;
  const d5 = Math.floor(Math.random() * 6) + 1;
  const d6 = Math.floor(Math.random() * 6) + 1;
  const diceThrow = `${d1}${d2}${d3}${d4}${d5}${d6}`;
  throwCount++;

  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0,
    c5 = 0,
    c6 = 0;
  for (let i = 0; i < 6; i++) {
    const c = diceThrow.charAt(i);
    if (c === "1") {
      c1++;
    } else if (c === "2") {
      c2++;
    } else if (c === "3") {
      c3++;
    } else if (c === "4") {
      c4++;
    } else if (c === "5") {
      c5++;
    } else {
      c6++;
    }
  }
  const diceCount = `${c1}${c2}${c3}${c4}${c5}${c6}`;

  let a1 = 0,
    a2 = 0,
    a3 = 0,
    a4 = 0,
    a5 = 0,
    a6 = 0;
  for (let i = 0; i < 6; i++) {
    const c = diceCount.charAt(i);
    if (c === "1") {
      a1++;
    } else if (c === "2") {
      a2++;
    } else if (c === "3") {
      a3++;
    } else if (c === "4") {
      a4++;
    } else if (c === "5") {
      a5++;
    } else if (c === "6") {
      a6++;
    }
  }
  const amount = `${a1}${a2}${a3}${a4}${a5}${a6}`;
  

  if(amount.includes("6") === true){
    if(hasStraight === false){
        hasStraight = true;
        printOut("---- Straight ----");
        printOut({ diceThrow, throwCount });
        printOut("------------------");
    }
  }else if(amount === "010100"){
    if(hasTower === false){
        hasTower = true;
        printOut("---- Tower -------");
        printOut({ diceThrow, throwCount });
        printOut("------------------");
    }
  }else if(amount === "030000"){
    if(has3Pairs === false){
        has3Pairs = true;
        printOut("---- 3 Pairs -----");
        printOut({ diceThrow, throwCount });
        printOut("------------------");
    }
  }else if(amount === "000001"){
        if(hasYatzy === false){
        hasYatzy = true;
        printOut("---- Yatzy -------");
        printOut({ diceThrow, throwCount });
        printOut("------------------");
    }
  }

  
} while (hasStraight === false || hasTower === false || has3Pairs === false || hasYatzy === false);
printOut(newLine);
