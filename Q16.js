//More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Yusra", "Ahsen", "Imran", "Hasnain"];
let canNot_Attend = "Imran";
let newGuest = "Wareesha";
guestArr[guestArr.indexOf(canNot_Attend)] = newGuest;
// console.log(guestArr);
// guestArr.map((items)=>(console.log(`Dear ${items}, I found a biger Dinner Table`)));
let guestBigin = "Asna";
guestArr.unshift(guestBigin);
console.log(guestArr);
let middleGuest = "Asif";
let middleindex = guestArr.length / 2;
guestArr.splice(middleindex, 0, middleGuest);
console.log(guestArr);
guestArr.push("Fatima");
console.log(guestArr);
guestArr.map((items) => (console.log(`Dear ${items}, You Are Cordinally invited to a Dinner`)));
export {};
