import colorPickerCardTpl from "../template/color-picker.hbs";
import colors from "../colors.json";
import  "../css/color-picker.css";

const palette = document.querySelector(".palette");

function createCardMarkUp(colors) {
  return colors.map((color) => {
    return colorPickerCardTpl(color);
  }).join("");
};
const cardsMarkUp = createCardMarkUp(colors);
palette.insertAdjacentHTML("afterbegin", cardsMarkUp);

palette.addEventListener("click", onPaletteClick);


// function onPaletteClick(e) {
//     const activeCard = e.target;
//     if (!activeCard.parentNode.classList.contains("color-card")) {
//         return;
//     }
//     else { 
//         activeCard.parentNode.classList.add("is-active");
//     };
// };

// На предку(найближньому)
let currentCard = "";
function onPaletteClick(e) {
  const activeCard = e.target;
  if (activeCard.closest("color-card")) {
    if (currentCard !== "") {
      currentCard.classList.remove("is-active");
    };
    activeCard.closest("color-card").classList.add("is-active");
    currentCard = activeCard.closest("color-card");
  } else {
    return;
  };
};