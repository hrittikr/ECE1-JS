function checkCharacter() {
    let ch = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (ch === "") {
        result.innerHTML = "Please enter a character.";
        result.style.color = "red";
    }
    else if (!(/[a-z]/.test(ch))) {
        result.innerHTML = "Please enter a valid alphabet.";
        result.style.color = "red";
    }
    else if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        result.innerHTML = `"${ch}" is a Vowel.`;
        result.style.color = "green";
    }
    else {
        result.innerHTML = `"${ch}" is a Consonant.`;
        result.style.color = "blue";
    }
}