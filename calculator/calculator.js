window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector("#loan-amount");
  const loanYears = document.querySelector("#loan-years");
  const loanRate = document.querySelector("#loan-rate");
  loanAmount.value = '6000';
  loanYears.value = '2';
  loanRate.value = '15';
  return {
    amount: loanAmount.value,
    years: loanYears.value,
    rate: loanRate.value
  }
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = parseInt(values['amount']);
  const i = parseInt(values['rate'])/12;
  const n = parseInt(values['years'])*12;
  const monthlyP = Math.round(((P * i)/(1 - (1 + i)**(-n)))*100)/100;
  const monthlyPayment = `${monthlyP}`;
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = `$${monthly}`;
}


