function addItem() {
    let input = document.getElementById("newText");

    let text = input.value;

    let list = document.getElementById("items");

    let newLine = document.createElement("li");

    newLine.innerHTML = text + " ";

    let link = document.createElement("a");

    link.setAttribute("href", "#");

    link.innerText = "[Delete]";

    newLine.appendChild(link);

    list.appendChild(newLine);

    input.value = "";

    list.addEventListener("click", e => del(e));

    function del(e){
        if (e.target.nodeName === "A"){
            let toRemove = e.target.parentNode;

            e.currentTarget.removeChild(toRemove);
        }
    }
}