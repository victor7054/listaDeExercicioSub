
let resultado = document.querySelector("#resultado")
let btCalcular = document.querySelector("#btCalcular")

function taxa() {

    let data = Number(document.querySelector("#data").value)
    let valorCarro = Number(document.querySelector("#valorCarro").value)
    if (data > 1990) {
        resultado.textContent = "pagará " + (valorCarro * 1.5) / 100 +  "de imposto"
    }
    else { resultado.textContent = "pagará " + (valorCarro * 1) / 100 } + "de imposto"
}

btCalcular.onclick = function () {
    taxa()
}