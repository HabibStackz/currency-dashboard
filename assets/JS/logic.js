// DOM selected elements
let currentDay = document.getElementById("currentDate");
let startBtn = document.getElementById("startButton");
let welcomeScreen = document.getElementById("welcomeMessage");
var currencyCards = document.getElementsByClassName('currencyCard')
var exchangeBtn = document.getElementById('exchangeButton')
// ==============================================

// user input variables
var userAmount = document.getElementById('userAmount')
var userDate = document.getElementById('userDate')
var selectedCurrency = document.getElementById('selectedCurrency').value
var currencyA = document.getElementById('currencyA')
var currencyB = document.getElementById('currencyB')
// ===============================================

// todays date
const today = dayjs()
currentDay.textContent = today.format("dddd-DD-MMMM-YYYY")
// ==============================================

// Welcome screen event listener
function hideWelcomeMessage(){
    welcomeScreen.style.display = 'none';
    for (let elem of currencyCards){
        elem.classList.remove('hide')
    }
}
startBtn.addEventListener('click', hideWelcomeMessage);
// =============================================


// Convertor API URL and API key
var currencyConverterQueryURL = ''
var convertorAPIKey = ''

// Historical data API URL and API key
var historicalDataQueryURL = ''
var historicalAPIKey = ''
// =============================================

// modal variables and functions
var errorModal = new bootstrap.Modal('#errorModal')
var modalXBtn = document.getElementById('modalXBtn')
var modalCloseBtn = document.getElementById('modalCloseBtn')

modalCloseBtn.addEventListener('click', closeModal)
modalXBtn.addEventListener('click', closeModal)

function closeModal(){
    errorModal.hide()
}
// =======================================================


// conversion function and event listener 
exchangeBtn.addEventListener('click', conversion)

function conversion() {
    if (userAmount.value == '' 
    || userAmount.value < 1 || userDate.value == '') {
        for (let elem of currencyCards){
            elem.classList.add('hide')
        }
        errorModal.show()
    } else {
        for (let elem of currencyCards){
            elem.classList.remove('hide')
        }
        currencyA.innerText = userAmount.value
        currencyB.innerText = userAmount.value * 5
        console.log(selectedCurrency.value)
    }
    }
    // ===============================================