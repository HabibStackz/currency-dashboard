let currentDay = document.getElementById("currentDate");
let startButton = document.getElementById("startExchange");
let welcomeScreen = document.getElementById("welcomeMessage");
const today = dayjs()

function hideWelcomeMessage(){
    welcomeScreen.style.display = 'none';
}
startButton.addEventListener('click', hideWelcomeMessage);

currentDay.textContent = today.format("dddd-MMMM-YYYY")