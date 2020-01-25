function init() {
  const width = parseFloat(
    getComputedStyle(document.documentElement, null).width.replace("px", "")
  );
  const materialImg = "img/Index/Material Test 002.png";

  if (width > 800) {
    const menuLink = document.querySelectorAll(".menu-link");
    const heroImg = document.querySelector(".hero-img");
    const hideOnScroll = document.querySelector(".hideOnScroll");
    const shrinkOnScroll = document.querySelector(".shrinkOnScroll");
    menuLink.forEach(el => {
      el.addEventListener("mouseenter", function(link) {
        heroImg.setAttribute("src", link.target.dataset.url);
      });
      el.addEventListener("mouseleave", function(link) {
        heroImg.setAttribute("src", materialImg);
      });
    });

    checkScroll();
    window.addEventListener("scroll", function() {
      checkScroll();
    });

    function checkScroll() {
      const scrollPos = document.documentElement.scrollTop;
      if (scrollPos > 0) {
        hideOnScroll.classList.add("hide");
        hideOnScroll.classList.remove("show");
        shrinkOnScroll.classList.add("animate");
      } else {
        hideOnScroll.classList.add("show");
        hideOnScroll.classList.remove("remove");
        shrinkOnScroll.classList.remove("animate");
      }
    }
  }
}

function ready() {
  if (document.readyState != "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
}

ready();
