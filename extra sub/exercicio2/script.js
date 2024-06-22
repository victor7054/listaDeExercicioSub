
let btCalcular = document.querySelector("#btCalcular")

function triangulo() {
    let valor1 = Number(document.querySelector("#valor1").value)
    let valor2 = Number(document.querySelector("#valor2").value)
    let valor3 = Number(document.querySelector("#valor3").value)
    let resultado = document.querySelector("#resultado")
    if ((valor1<(valor2+valor3)) && (valor2<(valor1 + valor3)) && (valor3<(valor1 + valor2))) {
        resultado.textContent = "isso é um triangulo comum"
        if (valor1 == valor2 && valor1 == valor3) {
            resultado.textContent = "isso é um triangulo Equiláteros"
        }
            
        else if(((valor1 == valor2) && (valor3 != valor1))||((valor1 == valor3) && (valor2 != valor3))||((valor2 == valor3) && (valor1 != valor2))){
            resultado.textContent = "isso é um triangolo Isósceles"
        }
        else{
            resultado.textContent = "isso é um triangolo Escaleno"
        }
    }
    
    else{
        resultado.textContent = "isso não é um triangulo"
    }
}

btCalcular.onclick = function () {
    triangulo()
}