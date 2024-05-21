import favorite from "../common/favorite";

favorite();

function toggleCheckbox($elements, child) {
	$elements.forEach(($element) => {
		$element.addEventListener("click", (event) => {
			const $target = event.target;

			if (
				!$target.classList.contains("is-checked") &&
				$target !== $element.querySelector(child)
			) {
				$target.classList.add("is-checked");
			} else if ($target === $element.querySelector(child)) {
				$target.parentElement.classList.remove("is-checked");
			} else {
				$target.classList.remove("is-checked");
			}
		});
	});
}

const $checkboxFilled = document.querySelectorAll(".js-checkbox-filled");
const checkboxFilledElementClassName = ".js-checkbox-filled-element";

if ($checkboxFilled.length > 0) {
	toggleCheckbox($checkboxFilled, checkboxFilledElementClassName);
}

const $hideVacancyButtons = document.querySelectorAll(".js-hide-vacancy");
$hideVacancyButtons.forEach(($button) => {
	$button.addEventListener("click", (e) => {
		const $card = e.target.closest(".js-card");

		$card.classList.add("hidden");
	});
});

const $undoHideVacancyButtons = document.querySelectorAll(
	".js-undo-hide-vacancy",
);
$undoHideVacancyButtons.forEach(($button) => {
	$button.addEventListener("click", (e) => {
		const $card = e.target.closest(".js-card");
		$card.classList.remove("hidden");
		$card
			.querySelector(".js-hide-company-vacancies-block")
			.classList.remove("hidden", "hidden-all");
	});
});

const $hideAdditionalBlockButtons = document.querySelectorAll(
	".js-hide-block-button",
);
$hideAdditionalBlockButtons.forEach(($button) => {
	$button.addEventListener("click", (e) => {
		const $block = e.target.closest(".js-hide-company-vacancies-block");
		$block.classList.add("hidden");
	});
});

const $hideAllVacancyCompanyButton = document.querySelectorAll(
	".js-hide-all-vacancy-button",
);
$hideAllVacancyCompanyButton.forEach(($button) => {
	$button.addEventListener("click", (e) => {
		const $block = e.target.closest(".js-hide-company-vacancies-block");
		$block.classList.add("hidden-all");
	});
});

const $undoHideCompanyVacanciesButton = document.querySelectorAll(
	".js-undo-hide-company-vacancies",
);
$undoHideCompanyVacanciesButton.forEach(($button) => {
	$button.addEventListener("click", (e) => {
		const $block = e.target.closest(".js-hide-company-vacancies-block");
		$block.classList.remove("hidden-all");
	});
});
