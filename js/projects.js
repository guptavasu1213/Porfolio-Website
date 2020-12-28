"use strict";
function fillProjectsInfo(projectData) {
    const template = document.querySelector("#projects-template").innerHTML;
    const renderFn = doT.template(template);
    const result = renderFn(projectData);
    document.querySelector("#projects").innerHTML = result;
}
function closePopup(popup) {
    popup.style.display = "none";
}
function fillLearnMorePopup(singleProjectData) {
    const template = document.querySelector("#learn-more-template").innerHTML;
    const renderFn = doT.template(template);
    const result = renderFn(singleProjectData);
    let popup = document.querySelector("#learn-more-popup");
    popup.innerHTML = result;
    let closeBtn = document.querySelector("#learn-more-popup .close");
    closeBtn.addEventListener("click", function () {
        closePopup(popup);
        popup.innerHTML = "";
    });
}
function attachLearnMoreListeners(json) {
    let learnBtns = document.querySelectorAll(".learn-more-btn");
    for (let i = 0; i < learnBtns.length; i++) {
        learnBtns[i].addEventListener("click", function () {
            fillLearnMorePopup(json[i]);
            document.querySelector("#learn-more-popup").style.display = "flex";
        });
    }
}
function addListenerOutsidePopup() {
    window.addEventListener("click", function (e) {
        let learnMorePopup = document.querySelector("#learn-more-popup");
        let contactPopup = document.querySelector("#contact-popup");
        if (e.target == learnMorePopup) {
            closePopup(learnMorePopup);
            learnMorePopup.innerHTML = "";
        }
        else if (e.target == contactPopup) {
            closePopup(contactPopup);
        }
    });
}
function retrieveProjectsAndFill() {
    fetch("./data/projects.json")
        .then(response => response.json())
        .then(json => {
        fillProjectsInfo(json);
        attachLearnMoreListeners(json);
    });
}
retrieveProjectsAndFill();
addListenerOutsidePopup();
