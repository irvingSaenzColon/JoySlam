// HTML Elements
    // Tag
const headerTag = document.querySelector('header');

    // Menus
const mainMenu = document.getElementById('main-menu');
const scoresMenu = document.getElementById('scores');
const configurationMenu = document.getElementById('game-mode');
const pauseMenu = document.getElementById('pause');
const gameScreen = document.getElementById('game-screen');

    // Buttons
const startPlayButton = document.getElementById('start-play-btn');
const startScoreButton = document.getElementById('start-score-btn');
const returnScore = document.getElementById('return-score');
const returnConfiguration = document.getElementById('returnConfiguration');
const returnPause = document.getElementById('pause-return');
const playButton = document.getElementById('play-btn');
const resumeGameButton = document.getElementById('resume-game');

// Event Listener
startPlayButton.addEventListener('click', goToPlayConfiguration);
startScoreButton.addEventListener('click', goToScoreMenu);
returnScore.addEventListener('click', goBackToMainMenu);
returnConfiguration.addEventListener('click', goBackToMainMenu);
returnPause.addEventListener('click', returnToMainMenu);
playButton.addEventListener('click', goToInGame);
resumeGameButton.addEventListener('click', onResumeGame);

gameScreen.addEventListener('keypress', onGameKey);

// Function click
function goToPlayConfiguration(event){
    console.log('Holi');
    mainMenu.classList.add('inactive');
    configurationMenu.classList.remove('inactive');
}

function goToScoreMenu(event){
    mainMenu.classList.add('inactive');
    scoresMenu.classList.remove('inactive');
}

function goBackToMainMenu(event){
    const dialog = event.target.closest('dialog');

    dialog.classList.add('inactive');
    mainMenu.classList.remove('inactive');
}

function goToInGame(event){
    const dialog = event.target.closest('dialog');

    dialog.classList.add('inactive');
    headerTag.classList.add('inactive');
    gameScreen.classList.remove('inactive');
}

function returnToMainMenu(event){
    const dialog = event.target.closest('dialog');

    dialog.classList.add('inactive');
    gameScreen.classList.add('inactive');

    headerTag.classList.remove('inactive');
    mainMenu.classList.remove('inactive');
}

function onResumeGame(event){
    const dialog = event.target.closest('dialog');

    dialog.classList.add('inactive');
}

// Function keydown
function onGameKey(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 112:
            onShowPauseMenu();
        break; 
    }
}

// Regular functions
function onShowPauseMenu(){
    if(pauseMenu.classList.contains('inactive'))
        pauseMenu.classList.remove('inactive');
    else 
        pauseMenu.classList.add('inactive');
}