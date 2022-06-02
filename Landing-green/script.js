((d) => {
  const menuIcons = d.querySelector("#menuIcons");
  const menuOpen = d.querySelector("#menuOpen");
  const menuClose = d.querySelector("#menuClose");
  const navMenu = d.querySelector("#navMenu");

  menuIcons.addEventListener("click", () => {
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
    navMenu.classList.toggle("active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches("#navMenu a")) return false;
    navMenu.classList.remove("active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });
})(document);
