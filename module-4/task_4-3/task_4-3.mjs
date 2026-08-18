"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];


//--- Part 1 ----------------------------------------------------------------------------------------------
function cmbTask1CalculateClick() {
  const txtTask1Output = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const width = parseInt(txtRectWidth.value);
  const height = parseInt(txtRectHeight.value);
  /* Put your code below here!*/


}
// Get the button element and attach the click event listener
let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
// Attach the click event listener to the button
cmbTask1Calculate.onclick = cmbTask1CalculateClick;


//--- Part 2 ----------------------------------------------------------------------------------------------

function txtTask2WordKeyPress(aEvent) {
  const txtTask2Output = document.getElementById("txtTask2Output");
  txtTask2Output.innerHTML = `You pressed the key: ${aEvent.key}`;
  /* Put your code below here!*/

}
// Get the input element and attach the keypress event listener
const txtTask2Word = document.getElementById("txtTask2Word");
// Attach the keypress event listener to the input
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
// Initialize an empty array to store the words entered by the user
const task2Words = [];

//--- Part 3 ----------------------------------------------------------------------------------------------
const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");

/* Put your code below here!*/
// 1. Create our function to handle the click event for the "Check Answer" button

// 2. Attach the event listener to the button

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// 1. Create our function to handle the change event for the radio buttons

// 2. Attach the event listener to each radio button

// 3. Loop through the CarTypes array and create radio buttons dynamically

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

// 1. Create a function to handle the change event for the select element

// 2. Attach the event listener to the select element
selectTask5Animals.addEventListener("change", SelectTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");
 
// 1. Loop through the GirlsNames array and create option elements dynamically

// 2. Create a function to handle the change event for the select element

// 3. Attach the event listener to the select element

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");
const tblMoviesBody = tblMovies.getElementsByTagName("tbody")[0];

// 1. Create a function to handle the click event for the "Add Movie" button

// 2. loop through the MovieGenre array and create option elements dynamically

// 3. Attach the event listener to the button
cmbAddMovie.addEventListener("click", cmbAddMovieClick);
// 4. Create three sample movies, and add them to the table using the function you created in step 1

// a) "The Shawshank Redemption" genre: Drama, director: Frank Darabont, rate: 9.3;
// b) "The Godfather" genre: Crime, director: Francis Ford Coppola, rate: 9.2;
// c) "The Dark Knight" genre: Action, director: Christopher Nolan, rate: 9.0;

// You can prepare one new movie, for fast testing:
// "Inception"; Genre: Sci-Fi; Director: Christopher Nolan; Rate: 8.8
