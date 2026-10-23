"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const carType = [
  { value: 1, option: "Volvo" }, 
  { value: 2, option: "BMW" },
  { value: 3, option: "Opel" },
  { value: 4, option: "Tesla" }
]

const domContainer = document.getElementById("domContainer");
const domSelectCar = document.getElementById("domSelectCar");
domSelectCar.addEventListener("change", domSelectCareChange);

for(let i = 0; i < carType.length; i++){
  const car = carType[i];
  const domOption = document.createElement("option");
  domOption.value = car.value;
  domOption.innerText = car.option;
  domSelectCar.appendChild(domOption);
}

function domSelectCareChange() {
  const car = parseInt(domSelectCar.value);
  for (let i = 0; i < carType.length; i++) {
    const element = carType[i];
    if(element.value === car){
      printOut(element.option);
    }
    
  }
}
