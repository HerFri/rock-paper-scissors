let draw = "It's a draw!";
let lose = "You lose!";
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
                winner.innerText = lose;
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
                winner.innerText = lose;
                compScore++;
                compScoreBoard.textContent = compScore;
            }
            pointColor();
        }

function pickNumberScissors() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();
                winner.innerText = lose;
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
    yourScoreBoard.innerText = 0;
    compScoreBoard.innerText = 0;
    yourScoreBoard.style.color = "#000000";
    compScoreBoard.style.color = "#000000";
    winner.innerText = "Click on Rock, Paper, or Scissors above!";
}

document.getElementById("rock").addEventListener("click", function() {
    showRock();
    pickNumberRock();
});

document.getElementById("paper").addEventListener("click", function() {
    showPaper();
    pickNumberPaper();
});

document.getElementById("scissors").addEventListener("click", function() {
    showScissors();
    pickNumberScissors();
});

document.getElementById("resetbtn").addEventListener("click", function() {
    reset();
});

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