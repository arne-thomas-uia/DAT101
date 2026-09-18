"use strict";
import { printOut } from "../../common/script/utils.mjs";

<<<<<<< HEAD
for(let i = 1, j = 20; i <= 10 && j >= 8; i++, j--){
    printOut(`i = ${i} , j = ${j}`);
}

printOut("Ferdig");
=======
const tableDraw = [10, 15, 11, 9, 7 , 8, 31];

let txtLottoDraw = "Ukens lotto trekning:";
for(let i = 0; i < 7; i++){
 const drawNumber = tableDraw[i];
 txtLottoDraw += " " + drawNumber.toString();
}

printOut(txtLottoDraw);

>>>>>>> 96b8479efd4337e982746abea908e40189015d7e
