"use strict";
function fillProjectsInfo(projectData) {
    const template = document.querySelector("#projects-template").innerHTML;
    const renderFn = doT.template(template);
    const result = renderFn(projectData);
    document.querySelector("#projects").innerHTML = result;
}
function fillLearnMorePopup(singleProjectData) {
    const template = document.querySelector("#learn-more-template").innerHTML;
    const renderFn = doT.template(template);
    const result = renderFn(singleProjectData);
    let popup = document.querySelector("#learn-more-popup");
    popup.innerHTML = result;
    let closeBtn = document.querySelector("#learn-more-popup .close");
    closeBtn.addEventListener("click", function () {
        popup.style.visibility = "hidden";
    });
}
function attachLearnMoreListeners(json) {
    let learnBtns = document.querySelectorAll(".learn-more-btn");
    for (let i = 0; i < learnBtns.length; i++) {
        learnBtns[i].addEventListener("click", function (event) {
            fillLearnMorePopup(json[i]);
            document.querySelector("#learn-more-popup").style.visibility = "visible";
        });
    }
}
function retrieveProjectsAndFill() {
    fetch("./data/projects.json")
        .then(response => response.json())
        .then(json => {
        console.log(json);
        fillProjectsInfo(json);
        attachLearnMoreListeners(json);
    });
}
retrieveProjectsAndFill();
