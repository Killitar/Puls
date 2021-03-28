const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  autoHeight: true,
  mouseDrag: false,
  navPosition: "bottom",
  responsive: {
    992: {
      autoHeight: true,
      nav: false,
    },
    991: {
      autoHeight: false,
      nav: true,
    },
    575: {
      nav: true,
      autoHeight: false,
    },
  },
});
document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});
