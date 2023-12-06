let currency = "AED";
let marketdataAPIkey = "0316a175ab7d4cb592969c346cdc3a57";
let date = new Date();
let year = date.getFullYear();

function getCurrentCurrencyData () {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => { console.error(error) });
}

function getHistoricalCurrencyData () {
    for (let i = year - 1; i > year - 6; i--) {
        fetch(`https://openexchangerates.org/api/historical/${i}-01-01.json?app_id=${marketdataAPIkey}&base=USD&symbols=EUR`)
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(error => { console.error(error) });
    }
}

function getCurrencyCodesFromCurrencyName () {
    fetch('https://openexchangerates.org/api/currencies.json')
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => console.error(error));
}

function getCurrencyCodesFromCountryName() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Get main name of country: data[0].name.common;
    });
}

getCurrentCurrencyData();
getHistoricalCurrencyData();
getCurrencyCodesFromCurrencyName();
getCurrencyCodesFromCountryName();


