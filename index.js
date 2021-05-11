const slider = document.querySelector(".slider input");
const img = document.querySelector(".image-2");
slider.oninput = () => {
  let slidervali = slider.value;
  //slider.style.left = slidervali + "%";
  //img.style.width = slidervali + "%";
  img.style.opacity = slidervali + "%";
};
