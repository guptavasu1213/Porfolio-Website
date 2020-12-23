"use strict";
function showPopup(message) {
    document.querySelector("#popup-message").innerHTML = message;
    document.querySelector(".popup").style.visibility = "visible";
}
function hidePopup() {
    document.querySelector(".popup").style.visibility = "hidden";
}
window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-me");
    function success() {
        form.reset();
        showPopup("Message Sent Successfully!");
    }
    function error() {
        showPopup("Oops! Error has occurred.");
    }
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE)
            return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        }
        else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
function attachListeners() {
    let okayBtn = document.querySelector("#okayBtn");
    okayBtn.addEventListener("click", hidePopup);
}
attachListeners();
