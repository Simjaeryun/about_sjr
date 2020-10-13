/*function skillClick() {
  const skillCtt = document.querySelectorAll(".skill_ctt_text");
  for (let i = 0; i < skillCtt.length; ++i) {
    skillCtt[i].classList.remove("show");
    skillCtt[i].classList.add("show");
  }
}*/

function skillClick() {
  const skillCtt = document.querySelectorAll(".skill_ctt_card");
  if (!document.querySelector(".show")) {
    skillCtt[0].classList.add("show");
    skillCtt[1].classList.add("show");
    skillCtt[2].classList.add("show");
    skillCtt[3].classList.add("show");
    skillCtt[4].classList.add("show");
  }
}

function skillRemove() {
  const skillCtt = document.querySelectorAll(".skill_ctt_card");
  if (document.querySelector(".show")) {
    skillCtt[0].classList.remove("show");
    skillCtt[1].classList.remove("show");
    skillCtt[2].classList.remove("show");
    skillCtt[3].classList.remove("show");
    skillCtt[4].classList.remove("show");
  }
}

function init() {
  navBtn[0].addEventListener("click", skillRemove);
  navBtn[1].addEventListener("click", skillClick);
  navBtn[2].addEventListener("click", skillRemove);
  navBtn[3].addEventListener("click", skillRemove);
}

init();
