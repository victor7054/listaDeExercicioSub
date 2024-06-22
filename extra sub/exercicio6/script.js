
let resultado = document.querySelector ("#resultado")
let btCalcular = document.querySelector ("#btCalcular")

function calculo() {
    let saldo = Number(document.querySelector ("#saldo").value)

    if(saldo >=0 && saldo<=200){
        resultado.textContent = "Nenhum crédito"
    }
    else if(saldo >=201 && saldo<=400){
        resultado.textContent = "valor do crédito é R$" + (saldo * 20) /100 
    }
    else if(saldo >=401 && saldo<=600){
        resultado.textContent = "valor do crédito é R$" + (saldo * 30) /100 
    } 
    else{
        resultado.textContent = "valor do crédito é R$" + (saldo * 40) /100 
    }
}

btCalcular.onclick = function(){
    calculo()
}
