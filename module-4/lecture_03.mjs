"use strict";
import { printOut, newLine} from "../../common/script/utils.mjs";

const domContainer = document.getElementById("domContainer");
const domP = document.createElement("p");
domP.innerText = "Hello, how are you?";
domContainer.appendChild(domP);


