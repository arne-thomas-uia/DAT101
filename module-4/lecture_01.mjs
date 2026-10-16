"use strict";
import { printOut, newLine} from "../../common/script/utils.mjs";
class TPerson{
    #personNumber = "";
    constructor(aPersonNumber, aFirstName, aLastName, aPhoneNumber){
        this.#personNumber = aPersonNumber;
        this.firstName = aFirstName;
        this.lastName = aLastName;
        this.phoneNumber = aPhoneNumber;
    }

    print(){
        printOut(this.#personNumber);
        printOut(this);
    }
}
const persons = [];
let person = new TPerson("010100 12345","Arne-Thomas", "Aas Søndeled", "406 70 431");
persons.push(person);
person = new TPerson("020201 12346", "Ola", "Normann", "100 20 300");
persons.push(person);
person = persons[1];
person.print();


//printOut(persons);
