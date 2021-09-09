const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
console.log(billAmount.value);
checkButton.addEventListener("click" , function validateBillAndCashAmount(){
    if( billAmount.value > 0 ){

    } else {
        errorMessage.innerText = "Amount insufficient"
    }
});
