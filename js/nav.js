const intro = document.querySelector(".intro"),
  skill = document.querySelector(".skill"),
  portfolio = document.querySelector(".portfolio"),
  about = document.querySelector(".about");

const section = document.querySelectorAll("section");

const navBtn = document.querySelectorAll(".nav_btn");

const SHOWING = "showing";

/*
function handleClick() {
  if (window.pageYOffset == intro.offsetTop) {
    window.scrollTo(0, skill.offsetTop);
  } else if (window.pageYOffset == skill.offsetTop) {
    window.scrollTo(0, portfolio.offsetTop);
  } else {
    window.scrollTo(0, 0);
  }
}
*/

function homeClick() {
  intro.classList.add(SHOWING);
  about.classList.remove(SHOWING);
  skill.classList.remove(SHOWING);
  portfolio.classList.remove(SHOWING);
  navBtn[0].style.color = "skyblue";
  navBtn[1].style.color = "#fff";
  navBtn[2].style.color = "#fff";
  navBtn[3].style.color = "#fff";
}

function aboutClick() {
  intro.classList.remove(SHOWING);
  about.classList.add(SHOWING);
  skill.classList.remove(SHOWING);
  portfolio.classList.remove(SHOWING);
  navBtn[0].style.color = "#fff";
  navBtn[1].style.color = "skyblue";
  navBtn[2].style.color = "#fff";
  navBtn[3].style.color = "#fff";
}

function skillClick() {
  intro.classList.remove(SHOWING);
  about.classList.remove(SHOWING);
  skill.classList.add(SHOWING);
  portfolio.classList.remove(SHOWING);
  navBtn[0].style.color = "#fff";
  navBtn[1].style.color = "#fff";
  navBtn[2].style.color = "skyblue";
  navBtn[3].style.color = "#fff";
}

function portfolioClick() {
  intro.classList.remove(SHOWING);
  about.classList.remove(SHOWING);
  skill.classList.remove(SHOWING);
  portfolio.classList.add(SHOWING);
  navBtn[0].style.color = "#fff";
  navBtn[1].style.color = "#fff";
  navBtn[2].style.color = "#fff";
  navBtn[3].style.color = "skyblue";
}

function init() {
  navBtn[0].addEventListener("click", homeClick);
  navBtn[1].addEventListener("click", aboutClick);
  navBtn[2].addEventListener("click", skillClick);
  navBtn[3].addEventListener("click", portfolioClick);
}

init();
