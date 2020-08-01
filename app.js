const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.375s ease forwards ${
          index / 5 + 0.7
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
  // nav toggle off
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.375s ease forwards ${
            index / 5 + 0.7
          }s`;
        }
      });
      burger.classList.toggle("toggle");
    });
  });
};

navSlide();
// scroll top button start
const scrollToTop = document.querySelector("#scroll-to-top");
let dataShow = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && !dataShow) {
    scrollToTop.setAttribute("data-show", "true");
    dataShow = true;
  }
  if (window.scrollY <= 50 && dataShow) {
    scrollToTop.setAttribute("data-show", "false");
    dataShow = false;
  }
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    display: "none",
  });
});
