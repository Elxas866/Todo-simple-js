function addTodo() {
    let input = document.getElementById("input").value;
    console.log(input);

    let element = document.createElement("p");
    let text = document.createTextNode(input);
    element.appendChild(text);
    let area = document.getElementById("area");
    area.appendChild(element);
}