const intro = document.querySelector(".intro"),
  about = document.querySelector(".about"),
  portfolio = document.querySelector(".portfolio");

const navBtn = document.querySelectorAll(".nav_btn");

const SHOWING = "showing";

/*
function handleClick() {
  if (window.pageYOffset == intro.offsetTop) {
    window.scrollTo(0, about.offsetTop);
  } else if (window.pageYOffset == about.offsetTop) {
    window.scrollTo(0, portfolio.offsetTop);
  } else {
    window.scrollTo(0, 0);
  }
}
*/

function homeClick() {
  intro.classList.add(SHOWING);
  about.classList.remove(SHOWING);
  portfolio.classList.remove(SHOWING);
}

function aboutClick() {
  intro.classList.remove(SHOWING);
  about.classList.add(SHOWING);
  portfolio.classList.remove(SHOWING);
}

function portfolioClick() {
  intro.classList.remove(SHOWING);
  about.classList.remove(SHOWING);
  portfolio.classList.add(SHOWING);
}

function init() {
  navBtn[0].addEventListener("click", homeClick);
  navBtn[1].addEventListener("click", aboutClick);
  navBtn[2].addEventListener("click", portfolioClick);
}

init();
