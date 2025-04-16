/*
1. In the S07 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

// Console log to ensure script is linked correctly
console.log("Hello World");

/*
    4. Create a function named getUserInfo. 
*/
function getUserInfo() {
    let user = {
        name: "John Doe",
        age: 25,
        address: "123 Main Street, New York",
        isMarried: false,
        petName: "Buddy"
    };
    console.log(user);
}

// Invoke the function
getUserInfo();

/*
    5. Create a function named getArtistsArray.
*/
function getArtistsArray() {
    let artists = ["Coldplay", "Ed Sheeran", "Taylor Swift", "Linkin Park", "The Weeknd"];
    console.log(artists);
}

// Invoke the function
getArtistsArray();

/*
    6. Create a function named getSongsArray.
*/
function getSongsArray() {
    let songs = ["Yellow", "Shape of You", "Lover", "In the End", "Blinding Lights"];
    console.log(songs);
}

// Invoke the function
getSongsArray();

/*
    7. Create a function named getMoviesArray.
*/
function getMoviesArray() {
    let movies = ["Inception", "Interstellar", "The Dark Knight", "Avengers: Endgame", "Parasite"];
    console.log(movies);
}

// Invoke the function
getMoviesArray();

/*
    8. Create a function named getPrimeNumberArray.
*/
function getPrimeNumberArray() {
    let primeNumbers = [2, 3, 5, 7, 11];
    console.log(primeNumbers);
}

// Invoke the function
getPrimeNumberArray();
