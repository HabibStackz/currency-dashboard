var chartEl1 = document.getElementById('chart_div1');
var chartEl2 = document.getElementById('chart_div2')
let currency = "AED";
let marketdataAPIkey = "0316a175ab7d4cb592969c346cdc3a57";
let date = new Date();
let year = date.getFullYear();

//set currency
var baseCurrency = "USD";
var quoteCurrency = "GBP"

//Visualization API and the core chart package.
google.charts.load('current', {'packages':['corechart']});

// API URL
var base_timeSeriesURL = "https://marketdata.tradermade.com/api/v1/timeseries?currency="+baseCurrency+quoteCurrency+"&api_key=6QCpzLmVDWQ2U_dkKVwr&start_date=2023-01-01&end_date=2023-11-30&format=records";
var quote_timeSeriesURL = "https://marketdata.tradermade.com/api/v1/timeseries?currency="+quoteCurrency+baseCurrency+"&api_key=6QCpzLmVDWQ2U_dkKVwr&start_date=2023-01-01&end_date=2023-11-30&format=records";

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

// function for getting timeSeries data from API
function getBaseCurrencyData () {
    var allHistoryCurrency = []; // currency history container
fetch(base_timeSeriesURL).then(function(response){
    return response.json();
}).then(function(data){
    for (var i=0; i<data.quotes.length; i++){ 
        //console.log(data)
        //Add data and close currency of timeSeries data to array
        allHistoryCurrency.push([data.quotes[i].date , data.quotes[i].close])
    }
    console.log(allHistoryCurrency);  
    //runChart();
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart(baseCurrency, allHistoryCurrency, chartEl1));
    
})
};


function getQuoteCurrencyData () {
    var allHistoryCurrency = []; // currency history container
fetch(quote_timeSeriesURL).then(function(response){
    return response.json();
}).then(function(data){
    for (var i=0; i<data.quotes.length; i++){ 
        //console.log(data)
        //Add data and close currency of timeSeries data to array
        allHistoryCurrency.push([data.quotes[i].date , data.quotes[i].close])
    }
    //console.log(allHistoryCurrency);  
    
    // callback function display chart.
    google.charts.setOnLoadCallback(drawChart(quoteCurrency, allHistoryCurrency, chartEl2));
    
})
};

// Function that creates and populates a data table
function drawChart(base, baseHistoryCurrency, chartEl) {
  
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', base);
    data.addRows(baseHistoryCurrency);

    // Set chart options
    var options = {'title':'Currency trend for the year 2023',
                   'width':600,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(chartEl);
    chart.draw(data, options);
  };


getBaseCurrencyData(); 
getQuoteCurrencyData();
getCurrentCurrencyData();
getHistoricalCurrencyData();
getCurrencyCodesFromCurrencyName();
getCurrencyCodesFromCountryName();

