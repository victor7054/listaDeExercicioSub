
let btCalcular = document.querySelector("#btCalcular")

let resultado = document.querySelector("#resultado")
function calculo() {
    let codigo = Number(document.querySelector("#codigo").value)
    let produto = Number(document.querySelector("#produto").value)

    if (codigo == 1) {
        resultado.textContent = "valor total a ser pago R$" + (produto - ((produto * 10)/ 100)) 
    }
    else if (codigo == 2) {
        resultado.textContent = "valor total a ser pago R$" + (produto - ((produto * 15)/ 100))
    }
    else if (codigo == 3) {
        resultado.textContent = "valor total a ser pago por parcela R$" + (((produto / 2)))
    }
    else if (codigo == 4) {
        resultado.textContent = "valor total a ser pago por parcela R$" + (produto + ((produto * 10)/ 100)) /2
    }
}

btCalcular.onclick = function () {
    calculo()
}