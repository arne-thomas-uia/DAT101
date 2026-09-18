"use strict";
import { printOut } from "../../common/script/utils.mjs";

const tableDraw = [10, 15, 11, 9, 7 , 8, 31];

let txtLottoDraw = "Ukens lotto trekning:";
for(let i = 0; i < 7; i++){
 const drawNumber = tableDraw[i];
 txtLottoDraw += " " + drawNumber.toString();
}

printOut(txtLottoDraw);

