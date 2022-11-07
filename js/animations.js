function AboutMeSection() {
  // let observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     const aboutMeSection = entry.target.querySelector("about-me");

  //     if (entry.isIntersecting) {
  //       aboutMeSection.classList.add("about-me-animation");
  //       return;
  //     }

  //     aboutMeSection.classList.remove("about-me-animation");
  //   });
  // });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelector(".about-me");

      if (entry.isIntersecting) {
        square.classList.add("about-me-animation");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove("about-me-animation");
    });
  });

  observer.observe(document.querySelector(".about-me-section"));
}

function NavHide() {
  const navElement = document.querySelector("#nav");
  let lastScrollY = window.screenY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      navElement.classList.add("hide-nav");
    } else {
      navElement.classList.remove("hide-nav");
    }

    lastScrollY = window.scrollY;
  });
}

function smoothScrolling() {
  let sectionLinks = document.querySelectorAll("a:link");
  sectionLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let hrefElement = link.getAttribute("href");
      let headerElement = document.querySelector(".header");

      if (hrefElement === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (hrefElement !== "#" && hrefElement.startsWith("#")) {
        let sectionEl = document.querySelector(hrefElement);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      if (link.classList.contains("main-nav-link")) {
        headerElement.classList.toggle("nav-open");
      }
    });
  });
}

smoothScrolling();
NavHide();
AboutMeSection();
