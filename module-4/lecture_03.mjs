"use strict";
import { printOut, newLine} from "../../common/script/utils.mjs";

const domName = document.getElementById("domName");
const domSubmit = document.getElementById("domSubmit");
domSubmit.addEventListener("click", onSubmit);

function onSubmit(){
    printOut(domName.value);
}


