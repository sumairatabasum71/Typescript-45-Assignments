//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//Tests for equality and inequality with strings:
const strings1:string="Apple";
const string2:string="Bnana";
console.log(strings1 === string2);//False string are not equal
console.log(strings1 !== string2); //True

//Tests using the lower case function:
const mixedCaseString="HelloSumaira";
console.log(mixedCaseString.toLowerCase() === "hellosumaira");


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
let num1:number=30;
let num2:number=5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//Tests using "and" and "or" operators:
let condition1:boolean=true;
let condition2:boolean=false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

//Test whether an item is in a array:
//Test whether an item is not in a array
let Fruits:string[]=["Bnana","Watermaleon","Strawberry","Orange"]
console.log(Fruits.includes("Bnana"));
console.log(Fruits.includes("bnana"));





