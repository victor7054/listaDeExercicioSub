let codigo = document.querySelector("#codigo")
let cargo = document.querySelector("#cargo")
let btProcurar = document.querySelector("#btProcurar")
let resultado = document.querySelector ("#resultado")
let resultado2 = document.querySelector ("#resultado2")

function pesquisar() {
    let salario = document.querySelector ("#salario")
    salario= Number(salario.value)

    resultado2.textContent = salario
    if (String(codigo.value) == "101") {
        cargo.value = "cargo 101 - Gerente";
        resultado.textContent = "10% de aumento"
        resultado2.innerHTML = " salario atual " + salario + "<br> aumento de " + (salario * 1 * 0.01 + " reais") + "<br> salario com o aumento será " + 
        (salario + (salario * 1 * 0.01 )) + " reais"
    }
    else if (String(codigo.value) == "102") {
        cargo.value = "cargo 102 - Engenheiro";
        resultado.textContent = "20% de aumento"
       resultado2.innerHTML = " salario atual " + salario + "<br> aumento de " + (salario * 1 * 0.02 + " reais") + "<br> salario com o aumento será " + 
        (salario + (salario * 1 * 0.02 )) + " reais"
    }
    else if (String(codigo.value) == "103"){
        cargo.value = "cargo 103 - Técnico";
        resultado.textContent = "30% de aumento"
resultado2.innerHTML = " salario atual " + salario + "<br> aumento de " + (salario * 1 * 0.05 + " reais") + "<br> salario com o aumento será " + 
        (salario + (salario * 1 * 0.05 )) + " reais"
    }
    else{
        cargo.value = "Diversos";
        resultado.textContent = "40% de aumento"
       resultado2.innerHTML = " salario atual " + salario + "<br> aumento de " + (salario * 1 * 0.4 + " reais") + "<br> salario com o aumento será " + 
        (salario + (salario * 1 * 0.4 )) + " reais"
    }
}

btProcurar.onclick = function(){
    pesquisar ()
}
