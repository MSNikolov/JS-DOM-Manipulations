function attachGradientEvents() {
    let box = document.getElementById("gradient");

    box.addEventListener("mousemove", (e) => {
        let result = Math.floor(((e.offsetX) / (e.target.clientWidth-1))*100);

        let res = document.getElementById("result");

        res.innerHTML = result+"%"

        console.log(e.offsetX)
    })
}