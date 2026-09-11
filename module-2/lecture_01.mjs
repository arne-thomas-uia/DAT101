"use strict"
import {printOut} from "../../common/script/utils.mjs";
// 20 >= r <= 25
const r = Math.floor(Math.random() * 5) + 20;
printOut({ r });

setTimeout(() => {
    window.location.reload();
}, 500);