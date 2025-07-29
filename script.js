const display = document.querySelector("input");
const numbers = document.querySelectorAll(".num");
const functions = document.querySelectorAll(".fun");
const equals = document.querySelector(".equ");
let input = "";


numbers.forEach(btn => {
  btn.addEventListener("click", () => {
    input += btn.textContent;
    display.value = input;
  });
});


functions.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (val === "AC") input = "";
    else if (val === "del") input = input.slice(0, -1);
    else if (val === "%") input = eval(input.replace(/x/g, "*")) / 100;
    else input += val;

    display.value = input;
  });
});


equals.addEventListener("click", () => {
  try {
    input = eval(input.replace(/x/g, "*")).toString();
  } catch {
    input = "Error";
  }
  display.value = input;
});
