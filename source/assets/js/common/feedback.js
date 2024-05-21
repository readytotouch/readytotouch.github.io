import MicroModal from "micromodal";

export default (target, radioButton, sendButton) => {
	const options = {
		// disableScroll: true,
		disableFocus: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	};

	target.forEach((element) => {
		element.addEventListener("click", () => {
			MicroModal.show("modal-feedback", options);
		});
	});

	radioButton.forEach((element) => {
		element.addEventListener("click", () => {
			if (sendButton.disabled) sendButton.disabled = false;
		});
	});

	sendButton.addEventListener("click", () => {
		MicroModal.close("modal-feedback-list");
		MicroModal.show("modal-feedback-result", options);
	});

	// for debugging
	for (const params of new URLSearchParams(window.location.href)) {
		if (params[1] === "empty") {
			MicroModal.show("modal-feedback", options);
		} else if (params[1] === "list") {
			MicroModal.show("modal-feedback-list", options);
		} else if (params[1] === "result") {
			MicroModal.show("modal-feedback-result", options);
		}
	}
};
