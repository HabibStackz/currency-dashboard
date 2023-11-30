// Convertor API URL and API key
var currencyConverterQueryURL = ''
var convertorAPIKey = ''

// Historical data API URL and API key
var historicalDataQueryURL = ''
var historicalAPIKey = ''


var userAmount = document.getElementById('userAmount') //This should be a class for both the user input and the appended amount on the dashboard. 
var userDate = document.getElementById('userDate') //This is the date chosen by the user

var selectedCurrency = document.getElementById('') //Dropdown menu for the currencies 

var exchangeCards = document.getElementsByClassName('')
var convertBtn = document.getElementById('convertBtn')

// Display nothing if the user has not entered a value
convertBtn.addEventListener('click', errorMessage)

function errorMessage(){
    if (userDate.value === '' || userAmount.value === ''){
    // exchangeCards.setAttribute('class', 'hide')
    console.log('Please enter both')
} else{
   return userDate.value, userAmount.value
} }

