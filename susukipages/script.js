/*Control Menu*/
((d) => {
  let menuOpen = d.querySelector("#iconMenuOpen");
  let menuClose = d.querySelector("#iconMenuClose");
  let menu = d.querySelector(".header-menu-icons");
  let menuItems = d.querySelector(".header-menu");

  menu.addEventListener("click", () => {
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
    menuItems.classList.toggle("active");
  });
})(document);

/*Nav main*/

((d) => {
  let nav1 = d.querySelector("#nav-1");
  let nav2 = d.querySelector("#nav-2");
  let nav3 = d.querySelector("#nav-3");
  let controler = d.querySelectorAll(".main-card");
  let section1 = d.querySelectorAll(".main-card-section")[0].children;
  let section2 = d.querySelectorAll(".main-card-section")[1].children;

  nav1.addEventListener("click", () => {
    for (const c of controler) {
      c.style.transform = "translateY(0%)";
      c.classList.remove("select");
    }
    section1[0].classList.add("select");
    section2[0].classList.add("select");
  });

  nav2.addEventListener("click", () => {
    for (const c of controler) {
      c.style.transform = "translateY(-123%)";
      c.classList.remove("select");
    }
    section1[1].classList.add("select");
    section2[1].classList.add("select");
  });

  nav3.addEventListener("click", () => {
    for (const c of controler) {
      c.style.transform = "translateY(-246%)";
      c.classList.remove("select");
    }
    section1[2].classList.add("select");
    section2[2].classList.add("select");
  });
})(document);
