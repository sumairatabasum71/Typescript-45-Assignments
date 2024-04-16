//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.
let guestArr = ["Yusra", "Ahsen", "Imran", "Hasnain"];
console.log("i can invite only two people to Dinner");
while (guestArr.length > 2) {
    let removeGuest = guestArr.pop();
    console.log(`Dear ${removeGuest}, you are not invited to the dinner`);
}
guestArr.map((items) => console.log(`Dear ${items}, you are still invited to the dinner`));
guestArr.pop();
console.log(guestArr);
export {};
