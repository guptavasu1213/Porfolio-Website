// Fill the projects tab with json data
function fillProjectsInfo(projectData: Array<any>): void {
	// Get the template from the DOM.
	const template = document.querySelector("#projects-template").innerHTML;

	// Create a render function for the template with doT.template.
	const renderFn = doT.template(template);

	// Use the render function to render the data.
	const result = renderFn(projectData);

	// Insert the result into the DOM (inside the <div>).
	document.querySelector("#projects").innerHTML = result;
}

function closePopup(popup: HTMLInputElement) {
	popup.style.display = "none";
}

// Fill the learn more popup with the project clicked on
function fillLearnMorePopup(singleProjectData: Array<any>) {
	// Get the template from the DOM.
	const template = document.querySelector("#learn-more-template").innerHTML;

	// Create a render function for the template with doT.template.
	const renderFn = doT.template(template);

	// Use the render function to render the data.
	const result = renderFn(singleProjectData);

	// Insert the result into the DOM (inside the <div>).
	let popup = document.querySelector("#learn-more-popup");

	popup.innerHTML = result;

	// X button on top-right of the popup
	let closeBtn = document.querySelector("#learn-more-popup .close");
	closeBtn.addEventListener("click", function () {
		closePopup(<HTMLInputElement>popup);
		popup.innerHTML = "";
	});
}

function attachLearnMoreListeners(json: Array<any>) {
	let learnBtns = document.querySelectorAll(".learn-more-btn");

	for (let i = 0; i < learnBtns.length; i++) {
		learnBtns[i].addEventListener("click", function () {
			fillLearnMorePopup(json[i]);
			(<HTMLInputElement>document.querySelector("#learn-more-popup")).style.display = "flex";
		});
	}
}

function addListenerOutsidePopup() {
	window.addEventListener("click", function (e) {
		let learnMorePopup = document.querySelector("#learn-more-popup");
		let contactPopup = document.querySelector("#contact-popup");
		if (e.target == learnMorePopup) {
			closePopup((<HTMLInputElement>learnMorePopup));
			learnMorePopup.innerHTML = "";
		} else if (e.target == contactPopup) {
			closePopup((<HTMLInputElement>contactPopup));
		}
	});
}

// Get the JSON and fill in the template
function retrieveProjectsAndFill() {
	fetch("./data/projects.json")
		.then(response => response.json())
		.then(
			json => {
				fillProjectsInfo(json);
				attachLearnMoreListeners(json);
			}
		);
}

retrieveProjectsAndFill();
addListenerOutsidePopup();