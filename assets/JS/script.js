

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
var switchBtn = document.getElementById('switchBtn')

// Display nothing if the user has not entered a value
convertBtn.addEventListener('submit', errorMessage)
// After this has been clicked, fetch the data from the API
// put the user amount in the API request to get the right conversion rate
// add the currency pair to the API URL request 
// pull the right currency pair from the users choice and match it will the API
// pull the right historical data from the API for the currency pair
// get the value of the converted currency
// append that converted value to the right hand currency card
// append the userAmount to the left hand currency card
// append the historical data from the second API to the <li> below userAmount and converted amount, maybe with for loop


// Error handler to deal with a blank input
function errorMessage() {
    userAmount.preventDefault()
    userDate.preventDefault()
    if (userDate.value === '' || userAmount.value === '' || userAmount.value < 1) {
        exchangeCards.setAttribute('class', 'hide')
        console.log('Please enter a valid date or amount')
    } else {
        exchangeCards.setAttribute('class', 'show')
        return userDate.value, userAmount.value
    }
}

// switchBtn.addEventListener('click', switchCurrency)

// function switchCurrency() {

// }