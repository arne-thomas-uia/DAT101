"use strict"
import { printOut } from "../../common/script/utils.mjs";

let a = 36; // Timer
let days = a / 24;
const day = Math.floor(days);
const rest = days - day;
const hours = rest * 24;

printOut({a, days, day, rest, hours});