const BtnMobile = document.getElementById("btn-mobile");

function toogleMenu(event) {
  const nav = document.getElementById("menu-mob");
  nav.classList.toggle("active");
}

BtnMobile.addEventListener("click", toogleMenu);
