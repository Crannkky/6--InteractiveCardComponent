const cleave = require("cleave.js");

const cleaveCC = new cleave("#cardNumber", {
  creditCard: true,
  delimitare: " ",
  onCreditCardTypechange: function (type) {
    console.log(type);
  },
});
