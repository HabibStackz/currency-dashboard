// DOM selected elements
var currentDay = document.getElementById("currentDate");
var startBtn = document.getElementById("startButton");
var welcomeScreen = document.getElementById("welcomeMessage");
var currencyCards = document.getElementsByClassName('currencyCard');
var exchangeBtn = document.getElementById('exchangeButton');
// ==============================================

// user input variables
var userAmount = document.getElementById('userAmount');
var userDate = document.getElementById('userDate');
var selectedCurrency = document.getElementById('selectedCurrency');
var updatedCurrency = document.getElementById('updatedCurrency');
var currencyA = document.getElementById('currencyA');
var currencyB = document.getElementById('currencyB');
// ===============================================

// todays date
const today = dayjs();
currentDay.textContent = today.format("dddd-DD-MMMM-YYYY");
// ==============================================

// Welcome screen event listener
function hideWelcomeMessage() {
    welcomeScreen.style.display = 'none';
    for (let elem of currencyCards) {
        elem.classList.remove('hide');
    }
}
startBtn.addEventListener('click', hideWelcomeMessage);
// =============================================


// Convertor API URL and API key
var currencyConverterQueryURL = '';
var convertorAPIKey = '';

// Historical data API URL and API key
var historicalDataQueryURL = '';
var historicalAPIKey = '';
// =============================================

// modal variables and functions
var errorModal = new bootstrap.Modal('#errorModal');
var modalXBtn = document.getElementById('modalXBtn');
var modalCloseBtn = document.getElementById('modalCloseBtn');

modalCloseBtn.addEventListener('click', closeModal);
modalXBtn.addEventListener('click', closeModal);

function closeModal() {
    errorModal.hide();
}
// =======================================================

// Get current currency data
async function getTheCurrentCurrencyData(text) {
    await getCurrentCurrencyData(text)
        .then(data => { })
        .catch(error => {
            console.error(error);
        })
};

// Get current currency data
async function getTheHistoricalCurrencyData(currencyGiven, currencyTargeting) {
    await getHistoricalCurrencyData(currencyGiven, currencyTargeting)
        .then(data => { })
        .catch(error => {
            console.error(error);
        })
};
// ===============================================

// conversion function and event listener 
exchangeBtn.addEventListener('click', conversion);
selectedCurrency.addEventListener('change', returnValue);

function returnValue(event) {
    const currentValue = event.target.value;
}

function conversion() {
    if (userAmount.value == ''
        || userAmount.value < 1 || userDate.value == '') {
        for (let elem of currencyCards) {
            elem.classList.add('hide');
        }
        errorModal.show();
    } else {
        for (let elem of currencyCards) {
            elem.classList.remove('hide');
        }


        let selectedCurrencyText = selectedCurrency.options[selectedCurrency.selectedIndex].innerText;
        if (selectedCurrencyText == '$') {
            var oldCurrencyText = 'USD';
        }
        else if (selectedCurrencyText == '£') {
            var oldCurrencyText = 'GBP';
        }

        let historicalData = getTheHistoricalCurrencyData(currency, updatedCurrency.value)

        var updatedCurrencyText = updatedCurrency.options[updatedCurrency.selectedIndex].innerText;

        if (updatedCurrencyText == '$') {
            var newCurrencyText = 'USD';
        }
        if (updatedCurrencyText == '£') {
            var newCurrencyText = 'GBP';
        }

        currencyA.innerText = selectedCurrencyText + userAmount.value + " " + oldCurrencyText;
        currencyB.innerText = selectedCurrencyText + userAmount.value * 5 + " " + newCurrencyText;

        getTheCurrentCurrencyData(newCurrencyText);
    }
}
// ===============================================


// The API was working at the begining of the project. However, it has stopped working now
// What we were hoping to do:
/*
    Run the getCurrentCurrencyData(currency) function passing in the currency entered by the user as the argument
    Use the rates object inside the object fetched from the API to get all of the different rates
    Find the correct rate which the user wanted to convert the currency to
    Multiply the amount of money entered by the user and the rate of the correct currency
    Display this value in the box currencyB
*/
/*
    We were also hoping to create a graph displaying the history of the currency over the past few years
    Although we have created the graph, we have not been able to display it correctly due to the API not working
*/
/*
    We also wanted to write down the currency flunctuation over the year but were not able to begin this part of the program as we were trying to fix the API
*/
/*
    We also wanted to append the recently searched items to the bottom of the page and store them in Local Storage. We wanted to display the 3 most recent searches on the page. We were not able to begin this part of the program as we were trying to fix the API.
*/
/*
    We also wanted to allow the user to use any currency in the API we are using by:
        typing the currency name
        typing the currency abbreviation
        typing the name of a country which uses that currency as its main currency
*/
/*
    The reason we were unable to get this done is because the API we were using stopped working close to the end of the project, and we only realsied a few hours before submission time that is the reason the program stopped working
*/
