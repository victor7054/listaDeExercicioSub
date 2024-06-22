
let resultado = document.querySelector ("#resultado")
let btCalcular = document.querySelector ("#btCalcular")

function calculo() {
    let valor = Number (document.querySelector ("#valor").value)
    resultado.innerHTML = "<br>são possíveis " + (valor / 100) + " Notas de 100<br> são possíveis " + (valor / 50) + " Notas de 50<br>"+
    "são possíveis " + (valor / 10) + " Notas de 10<br>" + "são possíveis " + (valor / 5) + " Notas de 5<br>" + "são possíveis " + (valor / 1) + " Notas de 1"
    

}

btCalcular.onclick = function(){
    calculo()
}