
function convert() {
    const hamsterCoins = document.getElementById("hamsterCoins").value;
    const conversionRate = 0.00000021; 
    const result = hamsterCoins * conversionRate;

    const resultText = document.getElementById("resultText");
    if (hamsterCoins === "" || hamsterCoins < 0) {
        resultText.textContent = "Please enter a valid number of coins!";
    } else {
        resultText.textContent = hamsterCoins + " coins = " + result + " BDT";
    }
}
