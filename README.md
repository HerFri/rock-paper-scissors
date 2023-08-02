# Rock-Paper-Scissors
Visit the live page [here](https://herfri.github.io/rock-paper-scissors/)

Rock-Paper-Scissors is an interactive webbrowser game based on the classic hand game that is usually played for making a decision by two persons. On this website, players can compete against the computer, that randomly chooses between rock, paper and scissors. There is no limit for playing rounds, and the score can be reset by any given time. Have fun playing!

![mockup](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/mockup.PNG?raw=true)

The mockup image has been generated on https://ui.dev/amiresponsive.

# User Experience
## User Stories
* As a user who never played the game before, I want to learn the rules of the game by easily understandable instructions.
* As a user, I want to find interactive elements for playing the game, like buttons, in a short time.
* As a user, I want to find a clean layout, so I can find my score and the score of the computer in a short time and view them while playing the game.
* As a user, I want to be able to reset my and the computer's score and start a new game. 
* As a user, I want to be able to access the website from different devices like PC, mobile devices and tablets.  

# Design
## Colors
In terms of colors I chose a basic color scheme, as the focus of the website is the game itself. The primary colors are black (#000000) and white (#FFFFFF). White is the background of the website and black is used for the texts, icons and borders of the respective areas like result area and score area. To highlight the scores and to mark who is leading in the game, the score of the leading player is highlighted in green (#008000), while the losing score is highlighted in red (#ff0000). When the player's score equals the computer's score, both scores are highlighted in yellow (#fcba03).

![colorpalette](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/colorpalette.png?raw=true)

The colorpalette above has been generated with [coolors.co](https://coolors.co/000000-ffffff-ff0000-008000-fcba03)

## Fonts
For the text elements of my website I used the 'Segoe UI' font, as it is clean and well readable and contributes to the basic style of the website.

# Structure
## Wireframes
For the structural planning of my website, I created some wireframes using the wireframe software [Balsamiq](https://balsamiq.com/).

Here are the wireframes, including both the desktop and mobile view:

* [Desktop wireframe](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/wireframe.png?raw=true)
* [Mobile view wireframe](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/wireframe-mobile.png?raw=true)

## Final Structure
The website is divided into 6 core sections:
* Header section with the title of the website
* A section where the player picks his/her choice between Rock, Paper and Scissors
* The 'fight' area, where the player's and computer's choice are displayed
* The result section that states who has won the round or if it is a draw
* The score section, where the player's and computer's score are shown, including a reset button to reset the score and start a new game
* The footer section, where the rules of the game are illustrated

# Features
## Header with Title
The header of the website comprises the title of the website, encouraging visitors of the website to play against the computer.

![header](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/header.PNG?raw=true)

## Clickable Images for Player Choice
Under the title, visitors of the website will find three clickable images illustrating hands forming rock, paper and scissors, which are the options players can choose from in the game, when competing against the computer.
![playerchoice](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/choiceicons.PNG?raw=true)

## 'Fight' Area
When one of the three options is clicked, the player's choice is displayed on the left side of the 'fight' area and the computer picks a random choice that is displayed on the right side. Over the 'fight area' there are the short texts 'Player' and 'Computer', indicating whose choice is whose. In between the player's and computer's choice, there is a 'vs' icon in the middle, the short version of the latin word 'versus', which means 'against', to give the game a feel of a fight that the player has against the computer. In the screenshot below, the player's choice is rock, whereas the computer's choice is scissors.

![fightarea](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/fightarea.PNG?raw=true)

## Result 
The result section comprises a textbox with a short text that indicates, depending on the choices of player and computer, whether the player wins or loses or if it is a draw. The default text instructs the player to choose one of the options above for playing.

![result](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/result.PNG?raw=true)
![resultwin](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resultwin.PNG?raw=true)
![resultlose](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resultlose.PNG?raw=true)
![resultdraw](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resultdraw.PNG?raw=true)

## Score section
As the name says, the score section displays the scores of the player and computer. The score counter of the respective side increments by one point when the player or computer wins. The scores change colors to green or red to mark the leading score.

![win](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/win.PNG?raw=true)

When the player's score equals to the score of the computer, the scores are displayed in yellow, marking a draw.

![draw](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/draw.PNG?raw=true)

In between the player's and computer's score is a reset button located for setting the scores back to 0 and to start a new game. By clicking the button, a confirmation dialog box shows up, asking the player's confirmation, if he/she really wants to reset the game.

![resetconfirm](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resetconfirm.PNG?raw=true)

By clicking 'Ok', the scores are reset to 0 and the 'fight area' will be cleared off the previous chosen options by player and computer. By clicking 'Cancel', the score stays the same just like before clicking the reset button.

![resetok](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resetok.PNG?raw=true)

## Footer
In the footer section the rules of the game are illustrated by using the images of the option icons depicting 'Rock', 'Paper' and 'Scissors'. The player is instructed that 'Rock' beats 'Scissors', 'Scissors' beat 'Paper' and 'Paper' beats 'Rock'.
![rules](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/rules.PNG?raw=true)

# Future Features
As a potential future feature a streak counter could be implemented that displays how many rounds in a row the player won.

# Accessibility
For good accessibility `alt`-attributes have been added to the images to support assistive technologies like screenreaders.

# Technologies Used 
Following technologies have been used for building my website:

* HTML
* CSS
* JavaScript
* GitHub
* GitHub Pages
* Visual Studio Code

# Testing
## Code Validation
The code of my website has been tested with following validators:
* W3C Validator test passed with no errors. [Test here](https://validator.w3.org/nu/?doc=https%3A%2F%2Fherfri.github.io%2Frock-paper-scissors%2F)
* Jigsaw Validator test passed with no errors. [Test here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fherfri.github.io%2Frock-paper-scissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)
* Jshint linter showed no errors. 

## Performance Test
To test the performance of the website the Google Lighthouse test was used and showed very good results:
![lighthouseresult](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/lighthouse.PNG?raw=true)

## Responsiveness
To test responsiveness, I used the website [AmIresponsive](https://ui.dev/amiresponsive?url=https://herfri.github.io/rock-paper-scissors/) that generated the [mockup image]().
Moreover, I used Chrome (Version 115.0.5790.110) Developer Tools to simulate viewports of different devices, which showed that my website was fully responsive:

![galaxyfold](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/galaxyfold.PNG?raw=true)

![iphone](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/iphone.PNG?raw=true)

![ipad](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/ipad.PNG?raw=true)

## Browser Testing
I checked the layout and appearance of my website for consistency on different browsers.

Tested browsers: Chrome, Firefox, Safari, Edge

Result: Layout and all functions work throughout the tested browsers.

## Manual Testing
| Feature                                           | Expectation                                                                                                                                                                                                                                                                                                                                     | Action                                  | Result                                                                                                                                                                                                                                     | Screenshot           |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| Clickable Images of 'Rock', 'Paper' and 'Scissors' | When clicked, the respective image is displayed in the 'fight' area, the computer's choice is displayed in the 'fight' area, the result-text, whether it is a win, lose or draw, is displayed in the result textbox, the score increments or stays the same, changes color to green/red/yellow, depending if player wins, loses or it is a draw | Clicked on each of the clickable images | Image is displayed in the 'fight' area, computer's choice is displayed in the 'fight' area, result-text is displayed in the result textbox, score increments or stays the same and changes color depending if it is a win, lose or a draw. | [View here](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/playerchoice.PNG?raw=true)       |
| Reset Button                                      | When clicked, a confirmation dialog box is displayed, asking the player if he/she really wants to reset the game                                                                                                                                                                                                                                | Clicked on Reset Button                 | Confirmation dialog box is displayed, asking the player if he/she really wants to reset the game                                                                                                                                           | [View here](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resetconfirm.PNG?raw=true) |
| 'Ok' button of confirmation dialog box            | When clicked, the scores reset to 0 and the 'fight area' will be cleared off the previous chosen options by player and computer.                                                                                                                                                                                                                | Clicked 'Ok' button                     | Scores are reset to 0, 'fight area' is cleared off the previous chosen options by player and computer.                                                                                                                                     | [View here](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/okbuttonclick.PNG?raw=true)        |
| 'Cancel' button of confirmation dialog box | When clicked, the scores stay the same just like before clicking the reset button | Clicked 'Cancel' button | Scores stay the same just like before clicking the reset button | [View here](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/cancelbuttonclick.PNG?raw=true) |

## Testing User Stories
| Expectation                                                                                                                                          | Result                                                                                                                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| As a user who never played the game before, I want to learn the rules of the game by easily understandable instructions.                             | As a user, I can find the rules of the game easily under the actual game in the footer section. The rules are explained in a very easily understandable manner, as the options to choose from and their capabilites are illustrated.                                             |
| As a user, I want to find interactive elements for playing the game, like buttons, in a short time.                                                  | As a user, I find an instructional text in the result section that informs me where to find the interactive elemtns to play the game, so I can find them very easily and in a short time. The label of the reset button helps me to comprehend its purpose in a very short time. |
| As a user, I want to find a clean layout, so I can find my score and the score of the computer in a short time and view them while playing the game. | As a user, I find a clean layout that enables me to find my and the computer's score very fast and I can view them while playing the game.  
| As a user, I want to be able to reset my and the computer's score and start a new game. | As a user, I can reset my and the computer's score and start a new game by clicking the reset button.                            |
| As a user, I want to be able to access the website from different devices like PC, mobile devices and tablets.                                                                    | As a user, thanks to the responsive design of the website, I am able to access the website with different devices, such as PC, mobile devices and tablets.     |

## Fixed Bugs

When users clicked the reset button followed by clicking on the cancel button of the confirmation dialog box, the score would reset anyway and the reset button would not serve its intended purpose.

To fix this, I added an `if`-condition to the function `reset`, to execute the function that resets the score only if this condition holds true:

`function reset() {
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
}`

# Deployment

This website was deployed via GitHub pages. The steps to do that are as follows:
1. Go to the GitHub repository and click on 'Settings'.
2. On the left side click on 'Pages'.
3. In the 'Build and deployment' section find 'Source', click the dropdown menu and click 'Deploy from a branch'.
4. Change to main branch.
5. After saving, the website should go live after some minutes. From now on, after every `git push`, the undertaken changes will apply to your website.

The link to the live site is: https://herfri.github.io/rock-paper-scissors/

To run the project locally, two options are possible:
1. In the GitHub repository, click the button 'Code', copy the HTTPS adress (https://github.com/HerFri/rock-paper-scissors.git) and use `git clone` followed by the HTTPS adress in your IDE.
2. Or: Go to the GitHub repository, click the button 'Code', click 'Download ZIP'. Once downloaded, extract the Zip file and open the files in your local IDE.

# Credits

## Media
Images:
[Rock, Paper, Scissors Icons](https://www.seekpng.com/ipng/u2q8u2a9a9o0r5a9_rock-paper-scissors-rock-paper-scissors-png/)

[VS Icon](https://de.depositphotos.com/89636676/stock-illustration-symbol-competition-vs-vector-illustration.html)

All media was used for educational purposes only.

## Code
[Display image on button click](https://codepen.io/Orajiaku/pen/NLomxZ)

# Acknowledgements
I want to thank my mentor and the tutors of Code Institute for their helpful advice and feedback during the work on this project!