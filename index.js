let theme = "light";

const themeButton = document.getElementById("theme-switch");

function main() {
  console.log("clicked");
  if (theme === "light") {
    theme = "dark";
    const webTheme = document.getElementById("theme1");
    webTheme.setAttribute("href", "./dark.css");
  } else {
    theme = "light";
    const webTheme = document.getElementById("theme1");
    webTheme.setAttribute("href", "./light.css");
  }
}

themeButton.addEventListener("click", main);
