let shareBtn = document.querySelector(".share-btn");
let socialShare = document.querySelector(".social-share");
let shareArea = document.querySelector(".share-area");
shareBtn.onclick = () => {
  shareBtn.classList.toggle("active");
  socialShare.classList.toggle("active");
  shareArea.classList.toggle("active");
};
