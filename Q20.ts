//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.

let countries:string[]=["USA","CHINA","FRANCE","GERMANY","JAPAN","CANADA"];
//print list of countries:
console.log("List of Countries:",countries.forEach(country=>{
    console.log(country)
}));
