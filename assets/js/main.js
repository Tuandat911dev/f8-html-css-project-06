// play video
const thumbVideoEl = document.querySelector(".intro-video");
const videoEl = document.querySelector(".intro-video-clip");

thumbVideoEl.addEventListener("click", (e) => {
  if (videoEl.classList.contains("is-show")) {
    videoEl.classList.remove("is-show");
    videoEl.pause();
  } else {
    videoEl.classList.add("is-show");
    videoEl.play();
  }
});

// navigation
const navigateItemEl = document.querySelectorAll(".glide__bullet");

navigateItemEl.forEach((item) => {
  item.addEventListener("click", () => {
    const activeNavEl = document.querySelector(".glide__bullet--active");
    activeNavEl.classList.remove("glide__bullet--active");
    item.classList.add("glide__bullet--active");
  });
});

//  FAQ
const faqEl = document.querySelectorAll(".faq-item");

faqEl.forEach((faq) => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector(".faq-item__answer");
    const faqBtnEl = faq.querySelector(".faq-item__btn");

    if (faq.classList.contains("active")) {
      answer.style.height = answer.scrollHeight + "px";
      requestAnimationFrame(() => {
        answer.style.height = "0px";
      });

      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
      answer.style.height = answer.scrollHeight + "px";

      answer.addEventListener(
        "transitionend",
        () => {
          if (faq.classList.contains("active")) {
            answer.style.height = "auto";
          }
        },
        { once: true }
      );
    }
  });
});
