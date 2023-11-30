// Convertor API URL and API key
var currencyConverterQueryURL = ''
var convertorAPIKey = ''

// Historical data API URL and API key
var historicalDataQueryURL = ''
var historicalAPIKey = ''


var userAmount = document.getElementsByClassName('') //This should be a class for both the user input and the appended amount on the dashboard. 
var userDate = document.getElementById('') //This is the date chosen by the user

var selectedCurrency = document.getElementById('') //Dropdown menu for the currencies 

var exchangeCards = document.getElementsByClassName('')


// Display nothing if the user has not entered a value
if (!userAmount || !userDate){
     exchangeCards.setAttribute('class', 'hide')
     
}