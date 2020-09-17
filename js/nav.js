const intro = document.querySelector(".intro"),
  about = document.querySelector(".about"),
  portfolio = document.querySelector(".portfolio");

const section = document.querySelectorAll("section");

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
  navBtn[0].style.color = "tomato";
  navBtn[1].style.color = "#fff";
  navBtn[2].style.color = "#fff";
}

function aboutClick() {
  intro.classList.remove(SHOWING);
  about.classList.add(SHOWING);
  portfolio.classList.remove(SHOWING);
  navBtn[0].style.color = "#fff";
  navBtn[1].style.color = "tomato";
  navBtn[2].style.color = "#fff";
}

function portfolioClick() {
  intro.classList.remove(SHOWING);
  about.classList.remove(SHOWING);
  portfolio.classList.add(SHOWING);
  navBtn[0].style.color = "#fff";
  navBtn[1].style.color = "#fff";
  navBtn[2].style.color = "tomato";
}

function init() {
  navBtn[0].addEventListener("click", homeClick);
  navBtn[1].addEventListener("click", aboutClick);
  navBtn[2].addEventListener("click", portfolioClick);
}

init();
