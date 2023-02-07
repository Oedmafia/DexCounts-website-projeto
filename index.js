const header = document.querySelector("header");
const nav = document.querySelector("nav");

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

header.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});