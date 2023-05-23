function addTodo() {
    let input = document.getElementById("input").value;
    console.log(input);

    let element = document.createElement("p");
    let text = document.createTextNode(input);
    element.appendChild(text);
    let area = document.getElementById("area");
    area.appendChild(element);
    element.classList.add("item");

    // Event listener
    element.addEventListener("click", () => {
        element.remove();
    });
}

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