# RPSLS.io

Rock • Paper • Scissors • Lizard • Spock

RPSLS.io is a responsive and accessible front-end web game based on the extended version of the classic Rock–Paper–Scissors game, with an added twist that introduces two additional choices — Lizard and Spock — as featured in the hit television programme The Big Bang Theory.

The application allows users to play against the computer, track scores per round, track total games won, and restart the game using a clear and intuitive interface.

The project was built using HTML, CSS, and vanilla JavaScript, following accessibility guidelines, UX principles, and best practices in version control and deployment.

 Live Site

 Live URL:



## CONTENTS

* [Project Purpose](#Project-Purpose)

* [Target Audience](#target-audience)

* [Features](#Features)
 * [Gameplay](#Gameplay)
 * [Score Tracking](#Score-Tracking)

* [Responsive Design](#Responsive-Design)
 * [Desktop](#Desktop)
 * [Mobile](#Mobile)
 
* [Accessibility](#Accessibility)

* [Design & UX Decisions](#Design--Ux-Decisions)

* [Technologies Used](#Technologies-Used)

* [Testing](#Testing)
 * [Validation](#Validation)
 * [Lighthouse](#Lighthouse)
 *[Known Issues](#known-issues)
 *[W3c Validator](#W3c-Validator)

* [Deployment](#deployment) 

*[File Structure](#file-structure)

*[Version Control](#version-control)

*[Credits](#credits)

*[Author](#author)

- - -

 ## Project Purpose

The purpose of this project is to:

Demonstrate front-end development skills using core web technologies

Implement meaningful JavaScript interactivity

Follow accessibility and UX design principles

Use Git and GitHub for version control

Deploy a finished application to a cloud platform

## Target Audience

Casual users who enjoy simple browser games

Learners exploring JavaScript logic and interactivity

Users on both desktop and mobile devices

## Features

 ### Gameplay

Five selectable moves: Rock, Paper, Scissors, Lizard, Spock

Computer opponent generates random choices

Round score updates automatically

First to 5 points wins a round

First to 3 games won wins the match

“New Game” button appears only when a match ends

 Screenshot – Gameplay Interface
[Game Start](assets/images/game-start.png)

### Score Tracking

Round score (Player vs Computer)

Total games won displayed beside the score

Automatic round reset after a round win

Full reset only occurs when New Game is clicked

 Screenshot – Scoreboard with New Game Button
[Game Won](assets/images/game-won.png)

 ## Responsive Design

### Desktop: 

horizontal button layout

### Mobile:

Compact 3-column grid for choices

Reduced button size to avoid scrolling

Fully usable on small screens

Screenshot – Mobile Layout
[Mobile View](assets/images/mobile-view.webm)

 ## Accessibility

High-contrast colour scheme for readability

Semantic HTML structure (header, main, section)

aria-labels on interactive buttons

Keyboard focus styles for buttons

Clear feedback after every action

Screenshot – Accessibility / Focus State
[Mid-Game ](assets/images/mid-game.png)
[round won](assets/images/round-won-incremented.png)

 ## Design & UX Decisions

Clean, distraction-free background

Foreground content always clearly visible

Consistent colour palette across UI elements

Icons used consistently via Font Awesome

Content organised by priority (Score → Choices → Results)

 ## Technologies Used

HTML5 (semantic markup)

CSS3 (Flexbox, Grid, Media Queries)

JavaScript (ES6) (game logic, DOM manipulation)

Font Awesome (icons)

Git & GitHub (version control)

GitHub Pages (deployment)

Lighthouse (testing & optimisation)

 ## Testing
 ### Validation

HTML validated using W3C Validator

CSS validated using Jigsaw Validator

JavaScript checked for errors via browser console

### Lighthouse 

used to test performance, accessibility, and best practices

 Screenshot – Lighthouse Report
 ### Desktop Lighthouse

[Desktop](docs/testing/lighthouse/desktop%20lighthouse.png) 

 ### Mobile Lighthouse

 [Mobile](docs/testing/lighthouse/mobile%20lighthouse.png) 

 ### Known Issues

Lighthouse “HTTPS” warning appears during local development (http://0.0.0.0:8000)
This is resolved automatically once deployed to GitHub Pages using HTTPS.

### W3C Validator

* [Index Page HTML](docs/testing/w3c/w3cindex.png)
* [Css Page HTML](docs/testing/w3c/w3ccss.png)

## Deployment

The project was deployed using GitHub Pages:

Push final code to GitHub repository

Navigate to Settings → Pages

Select main branch and root directory

Save and access the live HTTPS URL

The deployed version matches the development version.

 ## File Structure

RPSlS/
│ index.html
│ README.md
│
├── assets/
│   ├── css/
│   │     style.css
│   ├── js/
│   │     app.js
│   ├── images/
│   └── favicon/
├── docs/
│   ├── testing/
│   │     lighthouse/
│   │     w3c/


 ## Version Control

Git used throughout development

Clear, descriptive commit messages

Features developed incrementally

No commented-out or unused code in final version

## Credits

Game rules inspired by Rock Paper Scissors Lizard Spock

Icons provided by Font Awesome

No external JavaScript libraries used

## Author

RPSLS.io
Created by Ovie Agbofodoh