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

AboutMeSection();
console.log("asd");
