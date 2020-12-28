// Show Post Reporting Popup
function showPopup(message: string): void {
	document.querySelector("#popup-message").innerHTML = message;
	(<HTMLInputElement>document.querySelector("#contact-popup")).style.display = "flex";
}

window.addEventListener("DOMContentLoaded", function () {
	// get the form elements defined in your form HTML above
	let form = <HTMLFormElement>document.getElementById("contact-me");

	// Success and Error functions for after the form is submitted
	function success() {
		form.reset();
		showPopup("Message Sent Successfully!");
	}

	function error() {
		showPopup("Oops! Error has occurred.");
	}

	// handle the form submission event
	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		let data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request
function ajax(method: string, url: string, data: FormData, success: any, error: any) {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error();
		}
	};
	xhr.send(data);
}


// Attach button listeners on public view page
function attachListeners(): void {
	let okayBtn = document.querySelector("#okayBtn");
	okayBtn.addEventListener("click", function () {
		closePopup((<HTMLInputElement>document.querySelector("#contact-popup")));
	});
}

attachListeners();