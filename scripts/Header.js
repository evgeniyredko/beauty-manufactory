function getCookie(name) {
  var matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (getCookie("theme") == "dark") {
  var theme = document.querySelector("[data-js-theme]");
  theme.classList.add("dark-theme");
  var active = document.querySelector("[data-js-theme-active]");
  active.classList.add("theme__active--dark");
}

class Header {
  selectors = {
    root: "[data-js-header]",
    menu: "[data-js-header-menu]",
    burgerButton: "[data-js-header-burger-button]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.menuElement = this.rootElement.querySelector(this.selectors.menu);
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );

    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.menuElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

export default Header;
