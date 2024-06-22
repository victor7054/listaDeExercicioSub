
let btCalcular = document.querySelector("#btCalcular")
let resultado = document.querySelector("#resultado")

function calculo() {
    let nivel = Number(document.querySelector("#nivel").value)
    let hora = Number(document.querySelector("#hora").value)
    let aula = Number(document.querySelector("#aula").value)
    if (nivel == 1) {
        resultado.textContent = "o salario é de R$" + ((12 * hora) * aula) * 4.5
    }
    else if (nivel == 2) {
        resultado.textContent = "o salario é de R$" + ((17 * hora) * aula) * 4.5
    }
    else if (nivel == 3) {
        resultado.textContent = "o salario é de R$" + ((25 * hora) * aula) * 4.5
    }
}


btCalcular.onclick = function () {
    calculo()
}