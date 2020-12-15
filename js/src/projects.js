"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fillProjectsInfo() {
    const template = document.querySelector("#projects-template").innerHTML;
    const renderFn = doT.template(template);
    const result = renderFn(null);
    document.querySelector("#projects").innerHTML = result;
}
