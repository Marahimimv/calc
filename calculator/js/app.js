let amount = document.getElementById("amount");
let rate = document.getElementById("rate");
let time = document.getElementById("time");
let output = document.getElementById("output");

let form = document.getElementById("calculate-form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let loanAmount = (parseFloat(amount.value) * parseFloat(rate.value)) / 100;
    let totalAmount = parseFloat(amount.value) + loanAmount;

    let perMonth = totalAmount / parseFloat(time.value);
    output.innerText = Number(perMonth.toFixed(2));
});