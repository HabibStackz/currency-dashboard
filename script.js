let currency = "AED";
let marketdataAPIkey = "0316a175ab7d4cb592969c346cdc3a57";

fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => {
    console.error(error);
    });

function fetchData() {
    fetch(`https://openexchangerates.org/api/historical/2022-01-01.json?app_id=${marketdataAPIkey}&base=USD&symbols=EUR`)
    .then(response => response.json())
    .then(data => console.log(data.rates));
}
fetchData();