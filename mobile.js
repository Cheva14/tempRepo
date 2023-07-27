const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".cls");
const menuClose2 = document.querySelector(".close2");
const menuClose3 = document.querySelector(".close3");
const menuClose4 = document.querySelector(".close4");
const overlay = document.querySelector(".overlay");

const overlay1Open = document.querySelector(".open-overlay1");
const overlay1Close = document.querySelector(".cls1");
const overlay1 = document.querySelector(".overlay1");
const overlay2Open = document.querySelector(".open-overlay2");
const overlay2Close = document.querySelector(".cls2");
const overlay2 = document.querySelector(".overlay2");
const overlay3Open = document.querySelector(".open-overlay3");
const overlay3Close = document.querySelector(".cls3");
const overlay3 = document.querySelector(".overlay3");
const overlay4Open = document.querySelector(".open-overlay4");
const overlay4Close = document.querySelector(".cls4");
const overlay4 = document.querySelector(".overlay4");
const overlay5Open = document.querySelector(".open-overlay5");
const overlay5Close = document.querySelector(".cls5");
const overlay5 = document.querySelector(".overlay5");
const overlay6Open = document.querySelector(".open-overlay6");
const overlay6Close = document.querySelector(".cls6");
const overlay6 = document.querySelector(".overlay6");
const overlay7Open = document.querySelector(".open-overlay7");
const overlay7Close = document.querySelector(".cls7");
const overlay7 = document.querySelector(".overlay7");
const overlay8Open = document.querySelector(".open-overlay8");
const overlay8Close = document.querySelector(".cls8");
const overlay8 = document.querySelector(".overlay8");

overlay1Open.addEventListener("click", () => {
  overlay1.classList.add("overlay1--active");
});

overlay1Close.addEventListener("click", () => {
  overlay1.classList.remove("overlay1--active");
});

overlay2Open.addEventListener("click", () => {
  overlay2.classList.add("overlay2--active");
});

overlay2Close.addEventListener("click", () => {
  overlay2.classList.remove("overlay2--active");
});

overlay3Open.addEventListener("click", () => {
  overlay3.classList.add("overlay3--active");
});

overlay3Close.addEventListener("click", () => {
  overlay3.classList.remove("overlay3--active");
});

overlay4Open.addEventListener("click", () => {
  overlay4.classList.add("overlay4--active");
});

overlay4Close.addEventListener("click", () => {
  overlay4.classList.remove("overlay4--active");
});

overlay5Open.addEventListener("click", () => {
  overlay5.classList.add("overlay5--active");
});

overlay5Close.addEventListener("click", () => {
  overlay5.classList.remove("overlay5--active");
});

overlay6Open.addEventListener("click", () => {
  overlay6.classList.add("overlay6--active");
});

overlay6Close.addEventListener("click", () => {
  overlay6.classList.remove("overlay6--active");
});

overlay7Open.addEventListener("click", () => {
  overlay7.classList.add("overlay7--active");
});

overlay7Close.addEventListener("click", () => {
  overlay7.classList.remove("overlay7--active");
});

overlay8Open.addEventListener("click", () => {
  overlay8.classList.add("overlay8--active");
});

overlay8Close.addEventListener("click", () => {
  overlay8.classList.remove("overlay8--active");
});


menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  bar.style.top = "-80px";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  bar.style.top = "0px";
});

menuClose2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClose3.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClose4.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


var lastScrollTop = 0;
bar = document.getElementById("bar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    if (scrollTop > 74) {
      bar.style.top = "-80px";
    }
  } else {
    bar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});

const box = document.querySelector(".overlay1-box");

document.addEventListener("mouseup", function (event) {
  if (event.target.closest(".overlay1-box")) {
    return;
  }
  $("iframe").attr("src", $("iframe").attr("src"));
  overlay1.classList.remove("overlay1--active");
  overlay2.classList.remove("overlay2--active");
  overlay3.classList.remove("overlay3--active");
  overlay4.classList.remove("overlay4--active");
  overlay5.classList.remove("overlay5--active");
  overlay6.classList.remove("overlay6--active");
  overlay7.classList.remove("overlay7--active");
  overlay8.classList.remove("overlay8--active");
});
