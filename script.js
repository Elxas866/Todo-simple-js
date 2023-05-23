function addTodo() {
    // Input speichern
    let input = document.getElementById("input");
    console.log(input.value);

    // p Element erstellen
    let element = document.createElement("p");
    // Text Node für das Element erstellen
    let text = document.createTextNode(input.value);
    // Text Node an das p Element anhängen
    element.appendChild(text);

    // Div area bekommen
    let area = document.getElementById("area");
    // p Element an area anhängen
    area.appendChild(element);

    // item Klasse hinzufügen
    element.classList.add("item");

    // Event listener hinzufügen
    element.addEventListener("click", () => {
        element.remove();
    });

    // Am Ende noch das input Feld clearen
    input.value = "";
}

// Event Listener für den clear button
document.getElementById("clear_btn").addEventListener("click", () => {
    console.log("clicked");
    clearTodos();
});

function clearTodos() {
    let area = document.getElementById("area");

    while (area.hasChildNodes()) {
        area.removeChild(area.firstChild);
    }
}