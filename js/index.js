const button = document.querySelector(".next-btn");
const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");
let currentColor = "red";

button.addEventListener("click", () => {
  switch (currentColor) {
    case "red":
      redLight.style.backgroundColor = "gray";
      yellowLight.style.backgroundColor = "yellow";
      currentColor = "yellow";
      break;
    case "yellow":
      yellowLight.style.backgroundColor = "gray";
      greenLight.style.backgroundColor = "green";
      currentColor = "green";
      break;
    case "green":
      greenLight.style.backgroundColor = "gray";
      redLight.style.backgroundColor = "red";
      currentColor = "red";
      break;
  }
});
