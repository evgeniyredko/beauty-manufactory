// import "./typed.js"; // Библиотека для печатания текста
import Header from "./Header.js";

// Слайдер Swiper в Hero
const hero_swiper = new Swiper(".hero__slider > .swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  direction: "horizontal",
  allowTouchMove: false,
  autoplay: {
    delay: 3500,
  },
});

// Слайдер Swiper в Staff
const staff_swiper = new Swiper(".staff__slider > .swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  direction: "horizontal",
  allowTouchMove: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
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
