const DRAW = "It's a draw!";
const LOSE = "You lose!";
const WIN = "You win!";
let yourScore = 0;
let compScore = 0;
let yourScoreBoard = document.getElementById("yourPoints");
let compScoreBoard = document.getElementById("compPoints");
let winner = document.getElementById("winner");
let items = document.getElementsByClassName("divchoices");

/**
 * Initializes game
 */
function initializeGame() {
    document.getElementById("rock").addEventListener("click", function() {
        displaySelection("second", "third", "first");
        pickNumberRock();
    });

    document.getElementById("paper").addEventListener("click", function() {
        displaySelection("first", "third", "second");
        pickNumberPaper();
    });

    document.getElementById("scissors").addEventListener("click", function() {
        displaySelection("first", "second", "third");
        pickNumberScissors();
    });

    document.getElementById("resetbtn").addEventListener("click", function() {
        reset();
    });
}

/* Display images on button click source: https://codepen.io/Orajiaku/pen/NLomxZ */

/**
 * Displays the icon of the selected choice of player or computer
 */
function displaySelection(hideElementOne, hideElementTwo, displayElement) {
    document.getElementById(hideElementOne).style.display ='none';
    document.getElementById(hideElementTwo).style.display ='none';
    document.getElementById(displayElement).style.display ='block';
   }


/**
 * Computer picks a random number from 1 - 3,
 * Displays icon of the selected choice depending on the picked number,
 * Checks if player or computer wins when player chose rock,
 * Displays the result of the 'fight',
 * Increments score of the winner
 *
 */
   function pickNumberRock() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
    if (choiceNumber === 1) {
        displaySelection("fifth", "sixth", "fourth");            
        winner.innerText = DRAW;
    } else if (choiceNumber === 2){
        displaySelection("fourth", "sixth", "fifth");        
        winner.innerText = LOSE;
        compScore++;
        compScoreBoard.textContent = compScore;
    } else if (choiceNumber === 3){
        displaySelection("fifth", "fourth", "sixth");             
        winner.innerText = WIN;
        yourScore++;
        yourScoreBoard.textContent = yourScore;
    }
    pointColor(); 
}

/**
 * Computer picks a random number from 1 - 3,
 * Displays icon depending on the picked number,
 * Checks if player or computer wins when player chose paper,
 * Displays the result of the 'fight',
 * Increments score of the winner
 *
 */
function pickNumberPaper() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
    if (choiceNumber === 1) {
        displaySelection("fifth", "sixth", "fourth");
        winner.innerText = WIN;
        yourScore++;
        yourScoreBoard.textContent = yourScore;
    } else if (choiceNumber === 2){
        displaySelection("fourth", "sixth", "fifth");
        winner.innerText = DRAW;
    } else if (choiceNumber === 3){
        displaySelection("fifth", "fourth", "sixth");
        winner.innerText = LOSE;
        compScore++;
        compScoreBoard.textContent = compScore;
    }
    pointColor();
}

/**
 * Computer picks a random number from 1 - 3,
 * Displays icon depending on the picked number,
 * Checks if player or computer wins when player chose scissors,
 * Displays the result of the 'fight',
 * Increments score of the winner
 *
 */
function pickNumberScissors() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
    if (choiceNumber === 1) {
        displaySelection("fifth", "sixth", "fourth");
        winner.innerText = LOSE;
        compScore++;
        compScoreBoard.textContent = compScore;
    } else if (choiceNumber === 2){
        displaySelection("fourth", "sixth", "fifth");
        winner.innerText = WIN;
        yourScore++;
        yourScoreBoard.textContent = yourScore;
    } else if (choiceNumber === 3){
        displaySelection("fifth", "fourth", "sixth");
        winner.innerText = DRAW;
    }
    pointColor();
}

/**
 * Changes color of the score depending on who is winning or if it is a draw
 */
function pointColor() {
    if (yourScore > compScore) {
        yourScoreBoard.style.color = "#008000";
        compScoreBoard.style.color = "#ff0000";
    } else {
        compScoreBoard.style.color = "#008000";
        yourScoreBoard.style.color = "#ff0000";
    } if (yourScore === compScore) {
        yourScoreBoard.style.color = "#fcba03";
        compScoreBoard.style.color = "#fcba03";
    }
}

/**
 * Clears off the 'fight'-area of any displayed icons chosen by player and computer
 */
function resetChoices() {
    for (let item of items) {
        item.style.display = "none";
    }   
}

/**
 * Pop ups a dialog confirmation box, 
 * resets score to 0, changes colors of score and text of the resultbox to default when 'Ok' is clicked
 */
function reset() {
    if (confirm("Do you really want to reset the game?")) {
        resetChoices();
        compScore = 0;
        yourScore = 0;
        yourScoreBoard.innerText = 0;
        compScoreBoard.innerText = 0;
        yourScoreBoard.style.color = "#000000";
        compScoreBoard.style.color = "#000000";
        winner.innerText = "Click on Rock, Paper, or Scissors above!";
    }
}

addEventListener("DOMContentLoaded", initializeGame);