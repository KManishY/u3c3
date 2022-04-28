// Store the wallet amount to your local storage with key "amount"

function read(ids) {
      return document.getElementById(ids);
}
let sum = 0;
// let arr = JSON.parse(localStorage.getItem('amount'))||[];
let wallet;
wallet = document.getElementById("wallet").innerText = 0;
let arr = [];
function walletAmount() {
      let input = read("amount");

      sum = sum + Number(input.value);
      wallet = document.getElementById("wallet").innerText = sum;

      arr.push(wallet);

      localStorage.setItem("amount", JSON.stringify(arr));
}
