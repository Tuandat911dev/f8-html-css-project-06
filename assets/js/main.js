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
