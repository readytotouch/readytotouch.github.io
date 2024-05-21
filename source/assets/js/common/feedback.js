import MicroModal from "micromodal";

export default ($target, $radio, $send) => {
	const options = {
		// disableScroll: true,
		disableFocus: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	};

	$target.forEach((element) => {
		element.addEventListener("click", () => {
			MicroModal.show("modal-feedback", options);
		});
	});

	$radio.forEach(($element) => {
		$element.addEventListener("click", () => {
			$send.disabled = false;
		});
	});

	$send.addEventListener("click", () => {
		MicroModal.close("modal-feedback-list");
		MicroModal.show("modal-feedback-result", options);
	});

	// for debugging
	for (const params of new URLSearchParams(window.location.href)) {
		switch (params[1]) {
			case "empty":
				MicroModal.show("modal-feedback", options);
				break;
			case "list":
				MicroModal.show("modal-feedback-list", options);
				break;
			case "result":
				MicroModal.show("modal-feedback-result", options);
				break;
		}
	}
};
