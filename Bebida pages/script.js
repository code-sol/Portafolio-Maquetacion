((d) => {
  const menuIcons = d.querySelector("#menuIcons");
  const menuIconOpen = d.querySelector("#menuOpen");
  const menuIconClose = d.querySelector("#menuClose");
  const navMenu = d.querySelector("#navMenu");

  menuIcons.addEventListener("click", () => {
    menuIconOpen.classList.toggle("hidden");
    menuIconClose.classList.toggle("hidden");
    navMenu.classList.toggle("active");
  });
})(document);

((d) => {
  const img1 = "assets/img1.png";
  const img2 = "assets/img2.png";
  const img3 = "assets/img3.png";
  const btn1 = d.querySelector("#button1");
  const btn2 = d.querySelector("#button2");
  const btn3 = d.querySelector("#button3");
  const mainImg = d.querySelector("#mainImg");

  function action(e, i, c) {
    e.addEventListener("click", () => {
      mainImg.setAttribute("src", i);
      d.documentElement.style.setProperty("--p-color", "var(" + c + ")");
    });
  }
  action(btn1, img1, "--green-color");
  action(btn2, img2, "--pink-color");
  action(btn3, img3, "--purpul-color");
})(document);
