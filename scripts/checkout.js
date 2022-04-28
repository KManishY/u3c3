// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movie = JSON.parse(localStorage.getItem("movie"));

movie.map(function (el) {
      let img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
      let p = document.createElement("p");
      p.innerText = el.title;
      let div = document.createElement("div");
      div.append(img, p);
      document.querySelector("#movie").append(div);
});

let walletAmount = JSON.parse(localStorage.getItem("amount"));
let wallet = document.querySelector("#wallet");
walletAmount.map(function (el) {
      wallet.innerText = el;
});

function confirm() {
      let seats = document.querySelector("#number_of_seats").value;
      console.log(seats);
      let total = 100 * Number(seats);
      console.log(total);
      if (
            total == Number(wallet.innerText) ||
            total < Number(wallet.innerText)
      ) {
            alert("Booking successfull!");
            wallet.innerText = Number(wallet.innerText) - total;
      } else {
            alert("Insufficient Balance!");
      }

      localStorage.setItem("amount", JSON.stringify(wallet.innerText));
}
