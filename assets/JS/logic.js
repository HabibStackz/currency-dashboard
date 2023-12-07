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
        .then(data => { console.log(data) })
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
    console.log(currentValue);
}

function conversion() {
    if (userAmount.value == ''
        || userAmount.value < 1 || userDate.value == '') {
        for (let elem of currencyCards) {
            elem.classList.add('hide');
        }
        errorModal.show();
    } else {
        // API fetch goes here
        for (let elem of currencyCards) {
            elem.classList.remove('hide');
        }

        console.log(selectedCurrency);
        let selectedCurrencyText = selectedCurrency.options[selectedCurrency.selectedIndex].innerText;
        if (selectedCurrencyText == '$') {
            var currency = 'USD';
        }
        else if (selectedCurrencyText == '£') {
            var currency = 'GBP';
        }

        var updatedCurrencyText = updatedCurrency.options[updatedCurrency.selectedIndex].innerText;
        console.log("The updated currency type is " + updatedCurrencyText);
        if (updatedCurrencyText == '$') {
            var newCurrencyText = 'USD';
        }
        if (updatedCurrencyText == '£') {
            var newCurrencyText = 'GBP';
        }

        currencyA.innerText = selectedCurrencyText + userAmount.value + " " + currency;
        currencyB.innerText = selectedCurrencyText + userAmount.value * 5 + " " + newCurrencyText;

        getTheCurrentCurrencyData(newCurrencyText);
    }
}
// ===============================================