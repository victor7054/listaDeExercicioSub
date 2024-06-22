
let btCalcular = document.querySelector("#btCalcular")
let resultado = document.querySelector("#resultado")


function calculo() {
    let qntd = Number(document.querySelector("#qntd").value)
    let codigo = Number(document.querySelector("#codigo").value)

    if (codigo == 1) {
        resultado.textContent = "1 Cachorro Quente = R$11,00 valor a ser pago  " +  (qntd * 11)
    }
    else if(codigo == 2){
        resultado.textContent = "2 Bauru = R$8,50 valor a ser pago  " +  (qntd * 8.50)
    }

    else if(codigo == 3){
        resultado.textContent = "3 Misto Quente = R$8,00 valor a ser pago  " +  (qntd * 8)
    }
    else if(codigo == 4){
        resultado.textContent = "4 Hamburguer = R$9,00 valor a ser pago  " +  (qntd * 9)
    }
    else if(codigo == 5){
        resultado.textContent = "5 Cheeseburguer = R$10,00 valor a ser pago  " +  (qntd * 10)
    }
    else if(codigo == 6){
        resultado.textContent = "6 Refrigerante = R$4,50 valor a ser pago  " +  (qntd * 4.50)
    }
}

btCalcular.onclick = function () {
    calculo()
}