"use strict"
import {printOut} from "../../common/script/utils.mjs";
// Modulus %

printOut(`0 % 5 = ${0 % 5}`);
printOut(`1 % 5 = ${1 % 5}`);
printOut(`2 % 5 = ${2 % 5}`);
printOut(`3 % 5 = ${3 % 5}`);
printOut(`4 % 5 = ${4 % 5}`);
printOut(`5 % 5 = ${5 % 5}`);
printOut(`6 % 5 = ${6 % 5}`);
printOut(`7 % 5 = ${7 % 5}`);
printOut(`8 % 5 = ${8 % 5}`);
printOut(`9 % 5 = ${9 % 5}`);
printOut(`10 % 5 = ${10 % 5}`);
printOut(`32 timer = ${32 / 24} dager`)
printOut(`32 timer = ${Math.round(((32 / 24) - Math.floor(32 / 24) ) * 24)} timer igjen av en hel dag`)

printOut(`32 timer = ${32 % 24} timer igjen av en hel dag`);
