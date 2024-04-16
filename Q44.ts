//Sandwiches: Write a function that accepts a array of items a person wants
//on a sandwich. The function should have one parameter that collects as many
//items as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number
//of arguments each time.

import { log } from "console";

function sandwich(...items:string[]):void{
    console.log("sandwich order:");
    for(let i=0;i<items.length;i++){
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoye Your Sandwiche Maim");

sandwich("capcicum","garlic ketchup","chicken");
sandwich("beef","cheese");
sandwich("mayo sause","bbq chicken");



