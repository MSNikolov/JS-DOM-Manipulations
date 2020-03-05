function deleteByEmail() {
    let email = document.getElementsByTagName("input")[0].value;

    let table = document.getElementById("customers");

    let customers = document.getElementsByTagName("td");

    let result = document.getElementById("result");

    if (Array.from(customers).some(c => c.innerHTML === email && email.includes("@"))){
        let tableBody = table.children[1];

        let toRemove = Array.from(customers).find(c => c.innerHTML === email);

        tableBody.removeChild(toRemove.parentNode);

        result.innerText = "Deleted."
    }

    else{
        result.innerText = "Not found."
    }
}