// import "./typed.js"; // Библиотека для печатания текста
import Header from "./Header.js";

// Слайдер Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  direction: "horizontal",
  allowTouchMove: false,
  autoplay: {
    delay: 3500,
  },
});

// Закрытие бургер-меню псле клика на пункт меню
var menuLinks = document.querySelectorAll(".header__menu .header__menu-link");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (
      document.querySelector(".header__menu").classList.contains("is-active")
    ) {
      document.querySelector(".burger-button").click();
    }
  });
});

new Header();
