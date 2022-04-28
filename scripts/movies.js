// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmount = JSON.parse(localStorage.getItem("amount"));
walletAmount.map(function (el) {
      let wallet = document.querySelector("#wallet");
      wallet.innerText = el;
});

let id;
async function movies() {
      try {
            let API = `93793d73a0e249d18610f1bc7c3827fa`;
            let q = document.querySelector("#search").value;
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&include_adult=false&query=${q}`;

            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            appendData(data);
      } catch (err) {
            console.log("err:", err);
      }
}

function appendData(movie) {
      let movies = document.querySelector("#movies");
      movies.innerHTML = "";
      movie.results.map(function (el) {
            let img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
            let p = document.createElement("p");
            p.innerText = el.title;
            let btn = document.createElement("button");
            btn.innerText = "Book Now";
            btn.className = "book_now";
            btn.addEventListener("click", function () {
                  book_movie(el);
            });
            let div = document.createElement("div");
            div.append(img, p, btn);
            movies.append(div);
      });
}

async function main() {
      let data = await movies();
      if (data == undefined) {
            return false;
      }
      appendData(data);
}

function debounce(func, delay) {
      if (id) {
            clearTimeout(id);
      }
      id = setTimeout(function () {
            func();
      }, delay);
}
let arr = [];
function book_movie(el) {
      arr.push(el);
      localStorage.setItem("movie", JSON.stringify(arr));
      window.location.href = "./checkout.html";
}
