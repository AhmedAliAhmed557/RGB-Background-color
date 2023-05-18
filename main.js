let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let colorBox = document.querySelector(".color-box");

function updateColor() {
  let r = red.value;
  let g = green.value;
  let b = blue.value;
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
