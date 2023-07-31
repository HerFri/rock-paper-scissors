# Rock-Paper-Scissors
Visit the live page [here](https://herfri.github.io/rock-paper-scissors/)

Rock-Paper-Scissors is an interactive online/webbrowser game based on the classic hand game that is usually played for making a decision by two persons. On this website, players can compete against the computer, that randomly chooses between rock, paper and scissors. There is no limit for playing rounds, and the score can be reset by any given time. Have fun playing!

![mockup](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/mockup.PNG?raw=true)

The mockup image has been generated on https://ui.dev/amiresponsive.

# User Experience
## User Stories
* As a user who never played the game before, I want to learn the rules of the game by easily understandable instructions.
* As a user, I want to find interactive elements for playing the game, like buttons, in a short time.
* As a user, I want to find a clean layout, so I can find  my score and the score of the computer in a short time and view while playing the game.
* As a user, I want to be able to reset my and the computers' score and start a new game. 

# Design
## Colors
In terms of colors I chose a basic color scheme, as the focus of the website is the game itself. The primary colors are black (#000000) and white (#FFFFFF). White is the background of the website and black is used for the texts, icons and borders of the respective areas like result area and score area. To highlight the scores and mark who is leading the game, the score of the leading player is highlighted in green (#008000), while the losing score is highlighted in red (#ff0000). When the players' score equals the computers' score, both scores are highlighted in yellow (#fcba03).

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
* The 'fight' section, where the players' and computers' choice are illustrated
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
When one of the three options is clicked, the players' choice is displayed on the left side of the 'fight' area and the computer picks a random choice that is displayed on the right side. To make it more clear whose choice is whose, the short texts 'Player' and 'Computer' are located over the respective choice icons. In between the players' and computers' choice, there is a 'vs' icon in the middle, the short version of the latin word 'versus', which means 'against', to give the game a feel of a fight that the player has against the computer. In the screenshot below, the players' choice is rock, whereas the computer's choice is scissors.
![fightarea](https://github.com/HerFri/rock-paper-scissors/blob/main/readmeimages/fightarea.PNG?raw=true)