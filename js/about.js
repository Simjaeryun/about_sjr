/*function aboutClick() {
  const aboutCtt = document.querySelectorAll(".about_ctt_text");
  for (let i = 0; i < aboutCtt.length; ++i) {
    aboutCtt[i].classList.remove("show");
    aboutCtt[i].classList.add("show");
  }
}*/

function aboutClick() {
  const aboutCtt = document.querySelectorAll(".about_ctt_text");

  if (document.querySelector(".show")) {
    aboutCtt[0].classList.remove("show");
    aboutCtt[1].classList.remove("show");
    aboutCtt[2].classList.remove("show");
    aboutCtt[3].classList.remove("show");
    aboutCtt[4].classList.remove("show");
    aboutCtt[5].classList.remove("show");
  }else
}

function init() {
  navBtn[1].addEventListener("click", aboutClick);
}

init();
