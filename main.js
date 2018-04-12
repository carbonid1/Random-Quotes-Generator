const mainMenuBtn = document.getElementById("mainMenuBtn");
const mainMenu = document.getElementById("mainMenu");

mainMenu.addEventListener("click", () => {
  mainMenu.style.display = "none";
  mainMenuBtn.style.display = "block";
});

mainMenuBtn.addEventListener("click", () => {
  mainMenu.style.display = "block";
  mainMenuBtn.style.display = "none";
});
