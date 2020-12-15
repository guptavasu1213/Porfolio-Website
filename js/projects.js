"use strict";
function fillProjectsInfo(projectData) {
    const template = document.querySelector("#projects-template").innerHTML;
    const renderFn = doT.template(template);
    const result = renderFn(projectData);
    document.querySelector("#projects").innerHTML = result;
}
function retrieveProjectsAndFill() {
    fetch("./data/projects.json")
        .then(response => response.json())
        .then(json => {
        console.log(json);
        fillProjectsInfo(json);
    });
}
retrieveProjectsAndFill();
