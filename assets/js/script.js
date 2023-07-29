/* var choices = ["rock", "paper", "scissors"] */

/*document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("input");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.get)
        }
         )
    }

}) */

/* function generateNumber() {
    let genNbr = Math.floor(Math.random() * 3) +1;
} */

/*function runGame() {
    let rockBtn = getElementById("rock");
    let paperBtn = getElementById("paper");
    let scissorsBtn = getElementById("scissors");
    let playerOptions = [rockBtn,paperBtn,scissorsBtn];
    let computerOptions = ["rock","paper","scissors"];

    playerOptions.forEach(option => {
        option.addEventListener("click", function(){

            let choiceNumber = Math.floor(Math.random() * 3) +1;
            let ComputerChoice = computerOptions[choiceNumber];
            if (choiceNumber === 1){
                showRockComp()
            } else if (choiceNumber === 2){
                showPaperComp()
            } else if (choiceNumber === 3){
                showScissorsComp()
            }
    })
    }
    )
    } */


document.getElementById("rock").addEventListener("click", function() {
    showRock();
    pickNumberRock();
})
document.getElementById("paper").addEventListener("click", function() {
    showPaper();
    pickNumberPaper();
})
document.getElementById("scissors").addEventListener("click", function() {
    showScissors();
    pickNumberScissors();
})

document.getElementById("resetbtn").addEventListener("click", function() {
    reset();
})




let draw = "It's a draw!";
let loose = "You loose!";
let win = "You win!";
var yourScore = 0;
var compScore = 0;
var yourScoreBoard = document.getElementById("yourPoints");
var compScoreBoard = document.getElementById("compPoints");
var winner = document.getElementById("winner");


function pickNumberRock() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();            
                winner.innerText = draw;
            } else if (choiceNumber === 2){
                showPaperComp();        
                winner.innerText = loose;
                compScore++;
                compScoreBoard.textContent = compScore;
            } else if (choiceNumber === 3){
                showScissorsComp();             
                winner.innerText = win;
                yourScore++;
                yourScoreBoard.textContent = yourScore;
            }
            pointColor(); 
        }
function pickNumberPaper() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();
                winner.innerText = win;
                yourScore++;
                yourScoreBoard.textContent = yourScore;
            } else if (choiceNumber === 2){
                showPaperComp();
                winner.innerText = draw;
            } else if (choiceNumber === 3){
                showScissorsComp();
                winner.innerText = loose;
                compScore++;
                compScoreBoard.textContent = compScore;
            }
            pointColor();
        }

function pickNumberScissors() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();
                winner.innerText = loose;
                compScore++;
                compScoreBoard.textContent = compScore;
            } else if (choiceNumber === 2){
                showPaperComp();
                winner.innerText = win;
                yourScore++;
                yourScoreBoard.textContent = yourScore;
            } else if (choiceNumber === 3){
                showScissorsComp();
                winner.innerText = draw;
            }
            pointColor();
}

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

function reset() {
    compScore = 0;
    yourScore = 0;
    yourPoints.innerText = 0;
    compPoints.innerText = 0;
    yourPoints.style.color = "#000000";
    compPoints.style.color = "#000000";
    winner.innerText = "Click on Rock, Paper, or Scissors above!";
}

function showRock() {
  document.getElementById("first").style.display ='block';
  document.getElementById("second").style.display ='none';
  document.getElementById("third").style.display ='none';
}

function showPaper() {
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='block';
    document.getElementById("third").style.display ='none';
}

function showScissors() {
    document.getElementById("first").style.display ='none';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='block';
}

function showRockComp() {
    document.getElementById("fourth").style.display ='block';
    document.getElementById("fifth").style.display ='none';
    document.getElementById("sixth").style.display ='none';
  }
  
  function showPaperComp() {
      document.getElementById("fourth").style.display ='none';
      document.getElementById("fifth").style.display ='block';
      document.getElementById("sixth").style.display ='none';
  }
  
  function showScissorsComp() {
      document.getElementById("fourth").style.display ='none';
      document.getElementById("fifth").style.display ='none';
      document.getElementById("sixth").style.display ='block';
  }