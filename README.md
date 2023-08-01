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
* As a user, I want to be able to reset my and the computers' score and start a new game. 

# Design
## Colors
In terms of colors I chose a basic color scheme, as the focus of the website is the game itself. The primary colors are black (#000000) and white (#FFFFFF). White is the background of the website and black is used for the texts, icons and borders of the respective areas like result area and score area. To highlight the scores and to mark who is leading in the game, the score of the leading player is highlighted in green (#008000), while the losing score is highlighted in red (#ff0000). When the players' score equals the computers' score, both scores are highlighted in yellow (#fcba03).

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
* The 'fight' area, where the players' and computers' choice are displayed
* The result section that states who has won the round or if it is a draw
* The score section, where the players' and computers' score are shown, including a reset button to reset the score and start a new game
* The footer section, where the rules of the game are illustrated

# Features
## Header with Title
In the header section of the website is the title of the website, encouraging visitors of the website to play against the computer.

![header](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/header.PNG?raw=true)

## Clickable Images for Player Choice
Under the title, visitors of the website will find three clickable images illustrating hands forming rock, paper and scissors, which are the options players can choose from in the game, when competing against the computer.
![playerchoice](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/choiceicons.PNG?raw=true)

## 'Fight' Area
When one of the three options is clicked, the players' choice is displayed on the left side of the 'fight' area and the computer picks a random choice that is displayed on the right side. Over the 'fight area' there are the short texts 'Player' and 'Computer', indicating whose choice is whose. In between the players' and computers' choice, there is a 'vs' icon in the middle, the short version of the latin word 'versus', which means 'against', to give the game a feel of a fight that the player has against the computer. In the screenshot below, the players' choice is rock, whereas the computer's choice is scissors.

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

When the players' score equals to the score of the computer, the scores are displayed in yellow, marking a draw.
![draw](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/draw.PNG?raw=true)

In between the players' and computers' score is a reset button located for setting the scores back to 0 and to start a new game. By clicking the button, a pop-up shows up, asking the players' confirmation, if he/she really wants to reset the game.

![resetconfirm](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/resetconfirm.PNG?raw=true)

By clicking 'Ok', the scores are reset to 0 and the 'fight area' will be cleared off the previous chosen options by player and computer.

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