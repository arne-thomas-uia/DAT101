"use strict";
import { printOut } from "../../common/script/utils.mjs";

for(let i = 1, j = 20; i <= 10 && j >= 8; i++, j--){
    printOut(`i = ${i} , j = ${j}`);
}

printOut("Ferdig");
