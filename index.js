const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.getElementById("check-button");
const errorMessage = document.getElementById("error-message");

checkButton.addEventListener("click" , function validateBillAndCashAmount(){
    errorMessage.innerText = "";
    if( billAmount.value > 0 ){
        console.log(billAmount.value);
    } else {
        errorMessage.innerText = "Amount insufficient";
    }
});
