let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularPeso() {
    let h = Number(document.querySelector("#h").value);
    let sexo = document.querySelector("#sexo").value;

    if (sexo === "m") {
        resultado.textContent = ((72.7 * h) - 58).toFixed(2)  + "KG";
    } else {
        resultado.textContent = ((62.1 * h) - 44.7).toFixed(2) + "KG";
    }
}

btCalcular.onclick = function () {
    calcularPeso();
};
