const mainMenu = document.getElementById("mainMenu");

const myWindow = document.getElementById("myWindow");
const authorName = document.getElementById("authorName");
const quoteText = document.getElementById("quoteText");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const one = document.getElementById("one");

function appendName(name) {
  authorName.textContent = name;
}

function appendQuote(quote) {
  quoteText.textContent = quote;
}

function randomInteger(max) {
  const rand = Math.random() * (max + 1);
  return Math.floor(rand);
}

mainMenuBtn.addEventListener("click", () => {
  mainMenu.style.display = "block";
  myWindow.style.display = "none";
});

one.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("Steve Jobs");
  const arr = citesObj.Steve_Jobs;
  appendQuote(arr[randomInteger(arr.length - 1)]);
});

