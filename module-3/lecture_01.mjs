"use strict";
import { printOut } from "../../common/script/utils.mjs";
const txtAge = document.getElementById("txtAge");
let age;
document.getElementById("btnSubmit").addEventListener("click", CheckAge);
const movieAgeLim = 16;

printOut(`Du må være ${movieAgeLim} år, for å se filmen.` )

function CheckAge() {
  age = parseInt(txtAge.value);
  
  if(age === movieAgeLim){
    printOut(`Du er akkurat ${movieAgeLim} år.`);
  }else if(age > movieAgeLim){
    printOut(`Du er eldre enn ${movieAgeLim} år.`);
  }else{
    printOut("Du er ikke eldre enn " + movieAgeLim + " år.");
  }

}
