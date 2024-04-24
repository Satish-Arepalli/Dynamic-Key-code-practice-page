let keyCodeListEl = document.getElementById("keyCodeList");
let userInputEl = document.getElementById("userInput")

function createAndAppendKeyCode(keycode) {
    let listItemE1 = document.createElement("li");
    listItemE1.classList.add("mt-1");
    listItemE1.textContent = keycode;
    keyCodeListEl.appendChild(listItemE1);
}

function onKeydown(event) {
    createAndAppendKeyCode(event.keyCode);
}
userInputEl.addEventListener("keydown", onKeydown);