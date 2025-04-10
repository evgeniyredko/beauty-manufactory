// import "./typed.js"; // Библиотека для печатания текста
import Header from "./Header.js";

// Прелоадер
window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

// Плавная анимация появления блоков
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

// Список блоков на которые повесится анимация
let options = {
  threshold: [0.2],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  "h2, li:not(.header__menu-item, .soc1als__item, .footer__menu-item), .footer, .contacts__map"
);

for (let elm of elements) {
  observer.observe(elm);
}

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
  breakpoints: {
    768: {
      spaceBetween: 80,
    },
    480: {
      spaceBetween: 40,
    },
    320: {
      spaceBetween: 20,
    },
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
