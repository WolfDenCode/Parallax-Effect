let foreground = document.getElementById("foreground");
let midground = document.getElementById("midground");
let fore_background = document.getElementById("fore-background");
let background = document.getElementById("background");
let title = document.getElementById("title");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if (scrollY === 0) {
    foreground.style.top = -40 + "px";
    midground.style.top = -30 + "px";
    fore_background.style.top = -30 + "px";
    background.style.top = 0 + "px";
    title.style.top = scrollY * 0.5 + 70 + "px";
    return;
  }
  foreground.style.top = scrollY * -1.5 - 40 + "px";
  midground.style.top = scrollY * -1.5 - 30 + "px";
  fore_background.style.top = scrollY * -1 - 30 + "px";
  background.style.top = scrollY * -0.5 + "px";
  title.style.top = scrollY * 0.3 + 70 + "px";
});
