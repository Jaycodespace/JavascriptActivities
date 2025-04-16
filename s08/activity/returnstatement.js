/*
1. In the S24 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

console.log("Hello World");

//Note: Some of the problems are similar to S07, but this time we will use return statements.

// 4. Function to return user info
function getUserInfo() {
    return {
        name: "John Doe",
        age: 25,
        address: "123 Main St, Cityville",
        isMarried: false,
        petName: "Buddy"
    };
}
console.log(getUserInfo());

// 5. Function to return an array of favorite artists
function getArtistsArray() {
    return ["Ed Sheeran", "Adele", "Coldplay", "NIKI", "Hev Abi"];
}
console.log(getArtistsArray());

// 6. Function to return an array of favorite songs
function getSongsArray() {
    return ["Shape of You", "Someone Like You", "Yellow", "Lowkey", "Alam mo ba girl"];
}
console.log(getSongsArray());

// 7. Function to return an array of favorite movies
function getMoviesArray() {
    return ["Inception", "Interstellar", "The Dark Knight", "Titanic", "Avengers: Endgame"];
}
console.log(getMoviesArray());

// 8. Function to return an array of prime numbers
function getPrimeNumberArray() {
    return [2, 3, 5, 7, 11];
}
console.log(getPrimeNumberArray());

// 9. Global scope example
let globalTreasure = "Golden Key";
function seekGlobalTreasure() {
    return "Global Treasure Found: " + globalTreasure;
}
console.log(seekGlobalTreasure());ht

// 10. Local scope example
function localQuest() {
    let localGems = "Shiny Diamonds";
    return "Local Gems Discovered: " + localGems;
}
console.log(localQuest());

// Uncommenting the next line would cause an error
//console.log(localGems);

// 11. Debugging functions
function returnSquared12() {
    return 12 ** 2;
}
console.log(returnSquared12());

function returnRegisteredEmails() {
    return ["mara@mail.com", "clara@mail.com", "julie@mail.com"];
}
console.log(returnRegisteredEmails());

function returnItemInfo() {
    return {
        name: "Koko Krunch",
        description: "Koko Krunch is a staple chocolate cereal breakfast",
        price: 75
    };
}
console.log(returnItemInfo());

function retrieveAccount() {
    return {
        username: "michaelVillanueva",
        income: 60000,
        expenses: 25000
    };
}
console.log(retrieveAccount());
