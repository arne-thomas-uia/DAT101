"use strict";
import { printOut } from "../../common/script/utils.mjs";

function getHyp(catH, catM){
    const value1 = Math.pow(catH, 2);
    const value2 = Math.pow(catM, 2);
    const sum = value1 + value2;
    const hyp = Math.sqrt(sum);
    return hyp;
}

const hyp1 = getHyp(2, 5).toFixed(2);
printOut({ hyp1 });
printOut("Ferdig!");