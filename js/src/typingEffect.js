"use strict";
const allNouns = ["solutions", "ideas", "happiness"];
function main() {
    let currentNounIndex = 0;
    let typedLetterIndex = 0;
    (function type() {
        let timeout = 200;
        if (currentNounIndex === allNouns.length) {
            currentNounIndex = 0;
        }
        let currentText = allNouns[currentNounIndex];
        let typedLetters = currentText.slice(0, ++typedLetterIndex);
        document.querySelector(".typing").textContent = typedLetters;
        if (typedLetters.length === currentText.length) {
            currentNounIndex++;
            typedLetterIndex = 0;
            timeout = 2500;
        }
        setTimeout(type, timeout);
    }());
}
main();
