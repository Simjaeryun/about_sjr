/*function aboutClick() {
  const aboutCtt = document.querySelectorAll(".about_ctt_text");
  for (let i = 0; i < aboutCtt.length; ++i) {
    aboutCtt[i].classList.remove("show");
    aboutCtt[i].classList.add("show");
  }
}*/

function aboutClick() {
  const aboutCtt = document.querySelectorAll(".about_ctt_card");
  if (!document.querySelector(".show")) {
    aboutCtt[0].classList.add("show");
    aboutCtt[1].classList.add("show");
    aboutCtt[2].classList.add("show");
    aboutCtt[3].classList.add("show");
    aboutCtt[4].classList.add("show");
    aboutCtt[5].classList.add("show");
  }
}

function aboutRemove() {
  const aboutCtt = document.querySelectorAll(".about_ctt_card");
  if (document.querySelector(".show")) {
    aboutCtt[0].classList.remove("show");
    aboutCtt[1].classList.remove("show");
    aboutCtt[2].classList.remove("show");
    aboutCtt[3].classList.remove("show");
    aboutCtt[4].classList.remove("show");
    aboutCtt[5].classList.remove("show");
  }
}

function init() {
  navBtn[1].addEventListener("click", aboutClick);
  navBtn[0].addEventListener("click", aboutRemove);
  navBtn[2].addEventListener("click", aboutRemove);
  navBtn[3].addEventListener("click", aboutRemove);
  navBtn[4].addEventListener("click", aboutRemove);
  navBtn[5].addEventListener("click", aboutRemove);
}

init();
