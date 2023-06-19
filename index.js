const intro = document.getElementById("intro");
const text = intro.querySelector(".main_head").innerText;
let index = 0;
let backspace = false;

setInterval(() => {
  intro.querySelector(".main_head").innerHTML =
    text.slice(0, index) + (backspace ? "|" : " ");

  if (backspace) {
    index--;
    if (index === 0) backspace = false;
  } else {
    index++;
    if (index === text.length + 1) backspace = true;
  }
}, 200);
