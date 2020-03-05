function addItem() {
    let input = document.getElementsByTagName("input");

    let text = input[0].value;

    let list = document.getElementById("items");

    let newLine = document.createElement("li");

    newLine.innerHTML = text;

    list.appendChild(newLine);

    input[0].value = "";
}