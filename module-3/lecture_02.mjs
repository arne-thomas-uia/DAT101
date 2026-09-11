"use strict";
import { printOut } from "../../common/script/utils.mjs";
const txtDayOfMonth = document.getElementById("txtDayOfMonth");
let dayOfMonth;
document.getElementById("btnSubmit").addEventListener("click", CheckAge);

function CheckAge() {
  dayOfMonth = parseInt(txtDayOfMonth.value);
  switch (dayOfMonth) {
    case 1:
    case 2:
    case 3:
      printOut("Du må svømme 500 meter.")
    case 4:
    case 5:
    case 6:
      printOut("Du må jogge 7 km!")
      break;
    case 7:
      printOut("Ta deg en pause, gå på kino!");
      break;
  }
}
