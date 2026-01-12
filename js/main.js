/* ===== MOBILE MENU TOGGLE ===== */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

/* ===== SIMPLE SEARCH FILTER ===== */
function filterCards(inputId, cardClass) {
  const input = document.getElementById(inputId);
  const cards = document.querySelectorAll(`.${cardClass}`);

  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();
    cards.forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
}
