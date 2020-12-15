// Fill the table with the json data
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

// Get the JSON and fill in the template
function retrieveProjectsAndFill() {
	fetch("./data/projects.json")
		.then(response => response.json())
		.then(
			json => {
				console.log(json);
				fillProjectsInfo(json);
			}
		);
}

retrieveProjectsAndFill();