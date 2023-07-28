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

/* function playGame() {
    document.getElementById("rock").addEventListener("click", function() {
        pickNumber();
    })
    document.getElementById("paper").addEventListener("click", function() {
        pickNumber();
    })
    document.getElementById("scissors").addEventListener("click", function() {
        pickNumber();
    })
} */



let draw = "It's a draw!";
let loose = "You loose!";
let win = "You win!";
var yourScore = 0;
var compScore = 0;
var yourScoreBoard = document.getElementById("yourPoints");
var compScoreBoard = document.getElementById("compPoints");


function pickNumberRock() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();            
                document.getElementById("winner").innerText = draw;
            } else if (choiceNumber === 2){
                showPaperComp();        
                document.getElementById("winner").innerText = loose;
                compScore++;
                compScoreBoard.textContent = compScore;
            } else if (choiceNumber === 3){
                showScissorsComp();             
                document.getElementById("winner").innerText = win;
                yourScore++;
                yourScoreBoard.textContent = yourScore;
            }
        }
function pickNumberPaper() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();
                document.getElementById("winner").innerText = win;
                yourScore++;
                yourScoreBoard.textContent = yourScore;
            } else if (choiceNumber === 2){
                showPaperComp();
                document.getElementById("winner").innerText = draw;
            } else if (choiceNumber === 3){
                showScissorsComp();
                document.getElementById("winner").innerText = loose;
                compScore++;
                compScoreBoard.textContent = compScore;
            }
        }

function pickNumberScissors() {
    let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1) {
                showRockComp();
                document.getElementById("winner").innerText = loose;
                compScore++;
                compScoreBoard.textContent = compScore;
            } else if (choiceNumber === 2){
                showPaperComp();
                document.getElementById("winner").innerText = win;
                yourScore++;
                yourScoreBoard.textContent = yourScore;
            } else if (choiceNumber === 3){
                showScissorsComp();
                document.getElementById("winner").innerText = draw;
            }
}

function reset() {
    compScore = "0";
    yourScore = "0";
    yourPoints.innerText = "0";
    compPoints.innerText = "0";
}
     /*   console.log(choiceNumber);
        if (rock.onclick && choiceNumber === 1) {
            const tie = "it's a tie!";
            
        } else if (rock.onclick && choiceNumber === 2) {
            
        } else if (rock.onclick && choiceNumber === 3) {
            
        }
        /* value of rock is at the beginning, that is why it gets false message for following: */
       /* else if (paper.onclick && choiceNumber === 1) {
            const win = "You win!";
            document.getElementById("winner").innerText = win;
        } else if (paper.onclick && choiceNumber === 2) {
            const tie = "it's a tie!";
            document.getElementById("winner").innerText = tie;
        } else if (paper.onclick && choiceNumber === 3) {
            const loose = "You loose!";
            document.getElementById("winner").innerText = loose;
        } else if (scissors.onclick && choiceNumber === 1) {
            const loose = "You loose!";
            document.getElementById("winner").innerText = loose;
        } else if (scissors.onclick && choiceNumber === 2) {
            const win = "You win!";
            document.getElementById("winner").innerText = win;
        } else if (scissors.onclick && choiceNumber === 3) {
            const tie = "it's a tie!";
            document.getElementById("winner").innerText = tie;
        } */



/*
}

function winner() {


    if (rock.onclick) {
        console.log("Rock has been clicked")
    }
}
           
            
            /*console.log(ComputerNumber) */






   /* document.getElementById("rock").addEventListener("click", function() {

    } */
    
    


function checkAnswer() {

}

function incrementScore() {

}

function incrementStreak() {
    
}

function selectChoice() {

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