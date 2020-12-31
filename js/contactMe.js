"use strict";
function showPopup(message) {
    document.querySelector("#popup-message").innerHTML = message;
    document.querySelector("#contact-popup").style.display = "flex";
}
window.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contact-me");
    function success() {
        form.reset();
        showPopup("Message Sent Successfully!");
    }
    function error() {
        showPopup("Oops! Error has occurred.");
    }
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE)
            return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        }
        else {
            error();
        }
    };
    xhr.send(data);
}
function removeSideBarAnimationOnMobile() {
    function myFunction(query) {
        let sideBar = document.querySelector(".footer-social");
        if (query.matches) {
            if (sideBar.getAttributeNames().indexOf("data-aos") >= 0) {
                sideBar.removeAttribute("data-aos");
            }
        }
    }
    var query = window.matchMedia("(max-width: 900px)");
    myFunction(query);
    query.addEventListener("change", myFunction);
}
function attachListeners() {
    let okayBtn = document.querySelector("#okayBtn");
    okayBtn.addEventListener("click", function () {
        closePopup(document.querySelector("#contact-popup"));
    });
}
attachListeners();
removeSideBarAnimationOnMobile();
