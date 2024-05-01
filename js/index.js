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


// const bookList = document.querySelector(".books");
// let clickedBook = "";

// bookList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("book")) {
//     if (clickedBook) {
//       clickedBook.classList.remove("bgcolor-book");
//     }
//     clickedBook = event.target;
//     clickedBook.classList.toggle("bgcolor-book");
//   }
// });
