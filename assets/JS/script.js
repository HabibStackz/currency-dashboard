// Convertor API URL and API key
var currencyConverterQueryURL = ''
var convertorAPIKey = ''

// Historical data API URL and API key
var historicalDataQueryURL = ''
var historicalAPIKey = ''

var userAmount = document.getElementById('userAmount') //This should be a class for both the user input and the appended amount on the dashboard. 
var userDate = document.getElementById('userDate') //This is the date chosen by the user

var selectedCurrency = document.getElementById('') //Dropdown menu for the currencies 

var currencyCards = document.querySelectorAll('.currencyCard')
var convertBtn = document.getElementById('convertBtn')
var switchBtn = document.getElementById('switchBtn')
var nativeCurrencyDiv = document.getElementById('nativeCurrencyCard')
var convertedCurrencyDiv = document.getElementById('convertedCurrencyCard')

// To be replaced with the API conversion 
var conversionAmount = 5


// =============================================
// modal variables and functions
var errorModal = new bootstrap.Modal('#errorModal')
var modalXBtn = document.getElementById('modalXBtn')
var modalCloseBtn = document.getElementById('modalCloseBtn')

modalCloseBtn.addEventListener('click', closeModal)
modalXBtn.addEventListener('click', closeModal)

function closeModal(){
    errorModal.hide()
}
// ==================================================
// working todays date D,DD,MM,YYYY
var d = new Date()
var UTCDate = d.toUTCString()
var slicedDate = UTCDate.slice(0,16)
console.log(slicedDate)
// ==================================================

// Display nothing if the user has not entered a value
convertBtn.addEventListener('click', conversion)


// After this has been clicked, fetch the data from the API
// put the user amount in the API request to get the right conversion rate
// add the currency pair to the API URL request 
// pull the right currency pair from the users choice and match it will the API
// pull the right historical data from the API for the currency pair
// get the value of the converted currency
// append that converted value to the right hand currency card
// append the userAmount to the left hand currency card
// append the historical data from the second API to the <li> below userAmount and converted amount, maybe with for loop

// ===========================================================
// Error handler to deal with a blank input
function conversion() {
    if (userDate.value === '' || userAmount.value === '' 
    || userAmount.value < 1) {
        for (let elem of currencyCards){
            elem.classList.add('hide')
        }
        errorModal.show()
    } else {
        for (let elem of currencyCards){
            elem.classList.remove('hide')
        }
        var card = document.createElement('h2')
        var conCard = document.createElement('h2')
        var convertedValue = userAmount.value * conversionAmount
        card.innerText = userAmount.value
        conCard.innerText = convertedValue
        nativeCurrencyDiv.append(card)
        convertedCurrencyDiv.append(conCard)
    }
    }
    // ===========================================================

    // work in progress
    // switchBtn.addEventListener('click', switchCurrency)
    
    // function switchCurrency() {
    //     // this is where the currencies will be swapped over. 

    //     }
// ==============================================================

// Dummy HTML to work with functionality 

// =========================================================================

// error modal HTML
/* <div id="errorModal" class="modal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Error</h5>
      <button id="modalXBtn" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Please enter a valid amount or date</p>
    </div>
    <div class="modal-footer">
      <button id="modalCloseBtn" type="button" class="btn btn-secondary close" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div> */
// =========================================================================

// placeholder HTML
//     <input id="userAmount" type="text">
// <input id="userDate" type="text">
// <button id="convertBtn">Convert</button>
// <button class="switchBtn">Switch Currencies</button>

// <section>
//     <div id="nativeCurrencyCard" class="currencyCard">
//         <h2 id="nativeCurrencyAmount">5</h2>
//     </div>
//     <div id="convertedCurrencyCard" class="currencyCard">
//         <h2 id="convertedCurrencyAmount">5
//         </h2>
//     </div>
// </section>
// ======================================================================

// placeholder CSS 
// .hide{
//     display: none;
// }

// .currencyCard{
//     background-color: blueviolet;
// }
// ======================================================================