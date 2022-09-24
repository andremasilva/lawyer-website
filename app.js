//*navbar
const navbar = document.getElementById("nav");
window.addEventListener("scroll", function (e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 30) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
