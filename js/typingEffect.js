"use strict";
const words = ["solutions", "ideas", "happiness"];
function main() {
    let currentWordIndex = 0;
    let typedLetterIndex = 0;
    let typing;
    typing = true;
    (function type() {
        let timeout;
        if (typing === false) {
            timeout = 80;
            let currentText = words[currentWordIndex];
            let typedLetters = currentText.slice(0, --typedLetterIndex);
            document.querySelector(".typing").textContent = typedLetters;
            if (typedLetters.length === 0) {
                currentWordIndex++;
                typedLetterIndex = 0;
                typing = true;
            }
        }
        else {
            timeout = 200;
            if (currentWordIndex === words.length) {
                currentWordIndex = 0;
            }
            let currentText = words[currentWordIndex];
            let typedLetters = currentText.slice(0, ++typedLetterIndex);
            document.querySelector(".typing").textContent = typedLetters;
            if (typedLetters.length === currentText.length) {
                timeout = 2000;
                typing = false;
            }
        }
        setTimeout(type, timeout);
    }());
}
main();
