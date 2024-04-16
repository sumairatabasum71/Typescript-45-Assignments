//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!

let favourit_fruits:string[]=["Banana","apple","Strawberries"];

if(favourit_fruits.includes("Banana")){
    console.log("I Really Like Banana!")
}
if(favourit_fruits.includes("Apple")){
    console.log("I Really Like Apple!")
}
if(favourit_fruits.includes("Orange")){
    console.log("I Really Like Orange!")
}
else{
    console.log("Oranges are not my favourit fruits list.")
}
if(favourit_fruits.includes("Strawberries")){
    console.log("I Really Like Strawberries!")
}

if(favourit_fruits.includes("Grapes")){
    console.log("I Really Like Grapes!")
}
else{
    console.log("Grapes are not in your favourit list")
}














