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

function generateNumber() {
    let genNbr = Math.floor(Math.random() * 3) +1;
}

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

function playGame() {
    document.getElementsByClassName("images").onclick = function() {
        

        let choiceNumber = Math.floor(Math.random() * 3) +1;
            if (choiceNumber === 1){
                showRockComp();
            } else if (choiceNumber === 2){
                showPaperComp();
            } else if (choiceNumber === 3){
                showScissorsComp();
            }
        console.log(choiceNumber)
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