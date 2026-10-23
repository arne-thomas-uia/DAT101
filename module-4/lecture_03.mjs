"use strict";
import { printOut, newLine} from "../../common/script/utils.mjs";

const domContainer = document.getElementById("domContainer");
const domVolvo = document.getElementById("domVolvo");
const domBMW = document.getElementById("domBMW");
const domOpel = document.getElementById("domOpel");
domVolvo.addEventListener("change", carChange);
domBMW.addEventListener("change", carChange);
domOpel.addEventListener("change", carChange);

function carChange(){
    if(domVolvo.checked === true){
        printOut("You have the coolest car ever!!!");
    }
}


