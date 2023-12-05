let currency = "AED";
let marketdataAPIkey = "0316a175ab7d4cb592969c346cdc3a57";
let date = new Date();
let year = date.getFullYear();

var allHistoryCurrency = []; // currency history container

// Variable to get timeSeries data 
var timeSeriesURL = "https://marketdata.tradermade.com/api/v1/timeseries?currency=EURUSD&api_key=6QCpzLmVDWQ2U_dkKVwr&start_date=2023-01-01&end_date=2023-11-30&format=records";



function getCurrentCurrencyData () {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
    })
    .catch(error => { console.error(error) });
}

function getHistoricalCurrencyData () {
    for (let i = year - 1; i > year - 6; i--) {
        fetch(`https://openexchangerates.org/api/historical/${i}-01-01.json?app_id=${marketdataAPIkey}&base=USD&symbols=EUR`)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
        })
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
};

function runAPI () {
fetch(timeSeriesURL).then(function(response){
    return response.json();
}).then(function(data){
    for (var i=0; i<data.quotes.length; i++){
        //console.log([data.quotes[i].date , data.quotes[i].close] )
        //console.log(data.quotes[i].close);
        allHistoryCurrency.push([data.quotes[i].date , data.quotes[i].close])
    }
    console.log(allHistoryCurrency);  
})
};


//runAPI();
getCurrentCurrencyData();
getHistoricalCurrencyData();
getCurrencyCodesFromCurrencyName();
getCurrencyCodesFromCountryName();
