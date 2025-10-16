document.addEventListener("DOMContentLoaded", function () {
  const numBoxes = document.querySelectorAll(".num-box");

  numBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      this.classList.toggle("marked");
    });
  });
});
