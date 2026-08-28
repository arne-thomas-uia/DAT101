"use strict"
import { printOut } from "../../common/script/utils.mjs";

let a = 5;
const text = `Variable a inneholder ${a}`;
const l = text.length;
printOut( l );
const text2 = text.substring(0, 10);
printOut ( text );
printOut ( text2 );