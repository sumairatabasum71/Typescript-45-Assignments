// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let place_to_visit = ["Paris", "Belgium", "Austria", "Italy", "China", "Georgia"];
//print in original order:
console.log("Original Order:", place_to_visit);
//print array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical Order:", place_to_visit.slice().sort());
//array is still in its original order by printing it.
console.log("Original Order:", place_to_visit);
//Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:", place_to_visit.slice().sort().reverse());
//array is still in its original order by printing it again.
console.log("Original Order:", place_to_visit);
//array to show that its order has changed.
console.log("Reverse Order Changed:");
place_to_visit.reverse();
console.log(place_to_visit);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original Order:", place_to_visit.sort());
console.log(place_to_visit);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical Order Changed:", place_to_visit.sort().reverse());
console.log(place_to_visit);
export {};
