const words = ["solutions", "ideas", "happiness"];

function main() {
    let currentWordIndex = 0;
    let typedLetterIndex = 0;
    let typing;
    typing = true;

    (function type() {
        let timeout;
        if (typing === false) { // Untyping Mode
            timeout = 80;
            let currentText = words[currentWordIndex];
            let typedLetters = currentText.slice(0, --typedLetterIndex);

            document.querySelector(".typing").textContent = typedLetters;

            if (typedLetters.length === 0) {
                currentWordIndex++;
                typedLetterIndex = 0;
                typing = true;
            }
        } else { // Typing Mode
            timeout = 200;
            if (currentWordIndex === words.length) {
                currentWordIndex = 0;
            }

            let currentText = words[currentWordIndex];
            let typedLetters = currentText.slice(0, ++typedLetterIndex);

            document.querySelector(".typing").textContent = typedLetters;

            // When the word is entirely typed
            if (typedLetters.length === currentText.length) {
                timeout = 2000;
                typing = false;
            }
        }
        setTimeout(type, timeout);
    }());
}

main();