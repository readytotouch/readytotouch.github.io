document.querySelectorAll(".card__action-button").forEach((button) => {
	button.addEventListener("click", (event) => {
		event.target.classList.toggle("in-favorite");
	});
});
