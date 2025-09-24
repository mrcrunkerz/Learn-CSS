var backdrop = document.querySelector(".backdrop");
var choosePlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
var modal = document.querySelector(".modal");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
// console.dir(choosePlanButtons);

for (var i = 0; i < choosePlanButtons.length; i++) {
  choosePlanButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
// backdrop.style.display = "block";
backdrop.addEventListener("click", function () {
  closeModal();
  mobileNav.classList.remove("open");
});
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
