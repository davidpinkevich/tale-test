import arrow from "../assets/icons/arrow.svg";
import arrowBlack from "../assets/icons/arrow-black.svg";

function openElements() {
  const elements = document.querySelectorAll(".elements__item");
  const buttons = document.querySelectorAll(".elements__item-header button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      buttons.forEach((item) => {
        if (id !== item.getAttribute("data-id")) {
          item.classList.remove("active__button");
          item.firstElementChild.src = arrowBlack;
        }
      });
      elements.forEach((elem) => {
        if (elem.getAttribute("id") === id) {
          elem.classList.toggle("hidden");
          if (!elem.classList.contains("hidden")) {
            btn.classList.add("active__button");
            btn.firstElementChild.src = arrow;
          } else {
            btn.classList.remove("active__button");
            btn.firstElementChild.src = arrowBlack;
          }
        } else {
          elem.classList.add("hidden");
        }
      });
    });
  });
}

export { openElements };
