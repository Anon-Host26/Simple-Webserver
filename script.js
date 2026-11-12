// Genre filter for the movie cards
const filterButtons = document.querySelectorAll(".filter");
const movieCards = document.querySelectorAll(".movie-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const genre = button.dataset.genre;

    filterButtons.forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");

    movieCards.forEach((card) => {
      const matches = genre === "all" || card.dataset.genre === genre;
      card.hidden = !matches;
    });
  });
});

// Current year in the footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
