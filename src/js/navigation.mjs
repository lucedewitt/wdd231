function mainMenuHandler(ev) {
  let target = ev.target;
  document.querySelector('.global-nav').classList.toggle("show");
  if (target.tagName != "BUTTON") {
    target = target.closest("button");
  }
  if (document.querySelector('.global-nav').classList.contains("show")) {
    target.setAttribute("aria-expanded", true);
  } else {
    target.setAttribute("aria-expanded", false);
  }
  console.log("toggle");
}

function miniMenuHandler(ev) {
    ev.currentTarget.closest("li").querySelector(".global-nav__mini-section").classList.toggle("show")
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export function enableNavigation() {
  let menuButton = document.querySelector('#global-nav-toggle');
  let miniMenuButtons = document.querySelectorAll(".global-nav__split-button__toggle");

  menuButton.addEventListener('click', mainMenuHandler);
  miniMenuButtons.forEach((button) => {
    button.addEventListener('click', miniMenuHandler);
  })
}