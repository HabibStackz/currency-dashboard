let currentDay = document.getElementById("currentDate");
let startButton = document.getElementById("startExchange");
let welcomeScreen = document.getElementById("welcomeMessage");

function hideWelcomeMessage(){
    welcomeScreen.style.display = 'none';
}
startButton.addEventListener('click', hideWelcomeMessage);
