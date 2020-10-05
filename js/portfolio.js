const nextBtn = document.querySelector(".portfolio_ctt_next_btn"),
  prevBtn = document.querySelector(".portfolio_ctt_prev_btn"),
  portfolioBox = document.querySelector(".portfolio_ctt_box"),
  lastPortfolioBox = document.querySelector(".portfolio_ctt_box:last-child"),
  firstPortfolioBox = document.querySelector(".portfolio_ctt_box:first-child");

const ACTIVE = "active";

function nextClick() {
  const currentBox = document.querySelector(`.${ACTIVE}`);
  if (currentBox) {
    portfolioBox.classList.remove(ACTIVE);
    const nextBox = currentBox.nextElementSibling;
    if (nextBox) {
      nextBox.classList.add(ACTIVE);
      currentBox.classList.remove(ACTIVE);
    } else {
      currentBox.classList.remove(ACTIVE);
      firstPortfolioBox.classList.add(ACTIVE);
    }
  }
}

function prevClick() {
  const currentBox = document.querySelector(`.${ACTIVE}`);
  if (currentBox) {
    portfolioBox.classList.remove(ACTIVE);
    const prevBox = currentBox.previousElementSibling;
    if (prevBox) {
      prevBox.classList.add(ACTIVE);
      currentBox.classList.remove(ACTIVE);
    } else {
      currentBox.classList.remove(ACTIVE);
      lastPortfolioBox.classList.add(ACTIVE);
    }
  }
}

function portfolioLength() {
  const porlength = document.querySelectorAll(".portfolio_ctt_box");
  const title = document.querySelector(".portfolio_title>span");
  const navTitle = document.querySelectorAll(".nav_btn");
  title.innerHTML = porlength.length;
  navTitle[2].querySelector("span").innerHTML = porlength.length;
}

function init() {
  nextBtn.addEventListener("click", nextClick);
  prevBtn.addEventListener("click", prevClick);
  portfolioLength();
}

init();
