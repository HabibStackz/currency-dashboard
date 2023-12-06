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
var selectedCurrency = document.getElementById('selectedCurrency')
var currencyA = document.getElementById('currencyA')
var currencyB = document.getElementById('currencyB')
// ===============================================

const today = dayjs()

function hideWelcomeMessage(){
    welcomeScreen.style.display = 'none';
    for (let elem of currencyCards){
        elem.classList.remove('hide')
    }
}
startBtn.addEventListener('click', hideWelcomeMessage);

currentDay.textContent = today.format("dddd-DD-MMMM-YYYY")

// Convertor API URL and API key
var currencyConverterQueryURL = ''
var convertorAPIKey = ''

// Historical data API URL and API key
var historicalDataQueryURL = ''
var historicalAPIKey = ''


var nativeCurrencyDiv = document.getElementById('nativeCurrencyCard')
var convertedCurrencyDiv = document.getElementById('convertedCurrencyCard')

// To be replaced with the API conversion 
var conversionAmount = 5


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

// Display nothing if the user has not entered a value
exchangeBtn.addEventListener('click', conversion)

// After this has been clicked, fetch the data from the API
// put the user amount in the API request to get the right conversion rate
// add the currency pair to the API URL request 
// pull the right currency pair from the users choice and match it will the API
// pull the right historical data from the API for the currency pair
// get the value of the converted currency
// append that converted value to the right hand currency card
// append the userAmount to the left hand currency card
// append the historical data from the second API to the <li> below userAmount and converted amount, maybe with for loop

// ===========================================================
// Error handler to deal with a blank input
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
    }
    }