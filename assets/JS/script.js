let currency;
let marketdataAPIkey = "0316a175ab7d4cb592969c346cdc3a57";
let date = new Date();
let year = date.getFullYear();

async function getCurrentCurrencyData(currency) {
    return await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => { console.error(error) });
}

async function getHistoricalCurrencyData(currencyGiven, currencyTargeting) {
    let historicalCurrencyData = [];
    for (let i = year - 1; i > year - 6; i--) {
        await fetch(`https://openexchangerates.org/api/historical/${i}-01-01.json?app_id=${marketdataAPIkey}&base=${currencyGiven}&symbols=${currencyTargeting}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                historicalCurrencyData.push(data);
            })
            .catch(error => { console.error(error) });
    }
    return historicalCurrencyData;
}

async function getCurrencyCodesFromCurrencyName() {
    return await fetch('https://openexchangerates.org/api/currencies.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

async function getCurrencyCodesFromCountryName() {
    return await fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            return data;
            // Get main name of country: data[0].name.common;
        });
}