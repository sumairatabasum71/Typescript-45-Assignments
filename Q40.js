//Album: Write a function called make_album() that builds a Object
//describing a music album. The function should take in an artist name and an
//album title, and it should return a Object containing these two pieces of
//information. Use the function to make three dictionaries representing different
//albums. Print each return value to show that Objects are storing the
//album information correctly.
//Add an optional parameter to make_album() that allows you to store the
//number of tracks on an album. If the calling line includes a value for the number
//of tracks, add that value to the album’s Object. Make at least one new
//function call that includes the number of tracks on an album.
function make_album(artist, title) {
    let dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
//create three albums,one with the optional track count
let album1 = make_album("ali", "light");
console.log(album1);
let album2 = make_album("bilal", "red wave");
console.log(album2);
let album3 = make_album("hamza", "seenbreez");
console.log(album3);
export {};
