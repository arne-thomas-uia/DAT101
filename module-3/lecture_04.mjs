"use strict";
import { printOut } from "../../common/script/utils.mjs";

const myNumber = 358;
let guessNumber;
let guessCount = 0;
const timeStart = new Date();
do{
    guessNumber = Math.floor(Math.random()*1000000000) + 1;
    guessCount++;
}while(guessNumber !== myNumber)
const timeEnd = new Date();
const deltaTime = timeEnd.getTime() - timeStart.getTime() 
printOut({guessNumber, myNumber, guessCount, deltaTime});