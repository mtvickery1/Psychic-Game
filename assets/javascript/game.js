//variables//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = []; 

//start function//
start();

function start() {

	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];

	//console.logging answer//
	console.log(computerChoice);
		
	result();

	function result() {

		document.onkeyup = function(event) {

			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			//If the user wins//
			if (userGuess === computerChoice) {
				alert("You won!");
				wins = wins + 1;
				document.getElementById("wins").innerHTML = wins;
				resetGame();

			//If the user loses//
			} else {
				guessesLeft = guessesLeft - 1;
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				guessedLetters.push(userGuess); 
				document.getElementById("guessed-letters").innerHTML = guessedLetters;
				userLost();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9; 
		guessedLetters = [];  
		document.getElementById("guesses-left").innerHTML = guessesLeft;  
		document.getElementById("guessed-letters").innerHTML = guessedLetters;    
		start(); 
	}

	function userLost() {
		if (guessesLeft === 0) {
			alert("Game over! Try again.");
			losses = losses + 1
			document.getElementById("losses").innerHTML = losses;
			resetGame();
		}
	}
}



