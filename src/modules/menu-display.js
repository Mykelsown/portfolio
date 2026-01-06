const hamburgerMenuIconOpen = document.getElementById("menu-btn");
const hamburgerMenuIconClose = document.getElementById("menu-btn-second");
const menuDropdown = document.getElementById("mobile-menu");
const homeEl = document.getElementById("content-ex-head");

export function openMenu() {
  hamburgerMenuIconOpen.addEventListener("click", function () {
    menuDropdown.classList.remove("hidden");
    hamburgerMenuIconOpen.classList.add("hidden");
    hamburgerMenuIconClose.classList.remove("hidden");
  });
}

export function closeMenu() {
  hamburgerMenuIconClose.addEventListener("click", function () {
    hamburgerMenuIconOpen.classList.remove("hidden");
    hamburgerMenuIconClose.classList.add("hidden");
    menuDropdown.classList.add("hidden");
  });

  homeEl.addEventListener("click", function () {
    hamburgerMenuIconOpen.classList.remove('hidden')
    hamburgerMenuIconClose.classList.add('hidden')
    menuDropdown.classList.add("hidden");
  });
}
