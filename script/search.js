/** @format */

document.addEventListener("DOMContentLoaded", function () {
	const searchInput = document.getElementById("searchInput");
	const cards = document.querySelectorAll(".card");

	searchInput.addEventListener("input", function () {
		const searchTerm = searchInput.value.trim().toLowerCase();

		cards.forEach((card) => {
			const cardTitle = card
				.querySelector(".submitted-search-header")
				.textContent.toLowerCase();
			if (cardTitle.includes(searchTerm)) {
				card.style.display = "block"; // Show the card if it matches the search term
			} else {
				card.style.display = "none"; // Hide the card if it doesn't match the search term
			}
		});
	});
});
