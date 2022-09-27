// Button and container select
const submitForm = document.getElementById("confirm-btn");
const continueBtn = document.getElementById("continue-btn");
const form1 = document.getElementById("form-input");
const form2 = document.getElementById("form-thanks");

// Input select
const cardName = document.getElementById("holder-name");
const cardNumber = document.getElementById("number-card");
const cardMonth = document.getElementById("month-form");
const cardYear = document.getElementById("year-form");
const cardCVC = document.getElementById("cvc-form");

// Input Value Select

// Card back/front fields select
const cardNumberFront = document.getElementById("card-num-front");
const cardHolderFront = document.getElementById("card-name");
const cardMonthFront = document.getElementById("card-month-front");
const cardYearFront = document.getElementById("card-year-front");
const cvcBack = document.getElementById("card-cvc");

// function to show the thank you card and hide the form
submitForm.addEventListener("click", (e) => {
  form2.classList.remove("hidden");
  form1.classList.add("hidden");
  e.preventDefault();
});

// function to redirect thank you card to main page
continueBtn.addEventListener("click", () => {
  location.reload();
});

// Here is the issue, it does not take the values in real time using onkeyup nor onkeypress
//functions to change the values from the cards components while filling the details in the form
cardNumber.value.onkeyup = function () {
  cardNumberFront.innerText = cardNumber.value;
};
