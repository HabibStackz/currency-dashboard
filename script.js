let currency = "AED";

fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.rates);
    })
    .catch(error => {
        console.error(error);
    });
