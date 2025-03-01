document.querySelectorAll(".item").forEach((button) => {
  button.addEventListener("click", function () {
    let newTheme = this.getAttribute("data-theme");
    document.getElementById("themeStylesheet").setAttribute("href", newTheme);
  });
});

const themeLink = document.getElementById("themeStylesheet");

document
  .getElementById("clear-theme-button")
  .addEventListener("click", function () {
    let themeLink = document.getElementById("themeStylesheet");
    if (themeLink) {
      themeLink.setAttribute("href", "home.css");
    }

    document.querySelectorAll(".item").forEach((button) => {
      button.classList.remove("active");
    });
  });
