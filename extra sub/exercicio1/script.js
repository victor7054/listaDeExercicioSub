function ordenarDecrecente() {

    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let num3 = Number(document.querySelector('#num3').value)
    let num4 = Number(document.querySelector('#num4').value)
    let num5 = Number(document.querySelector('#num5').value)
    let res = document.querySelector('.res')

    let posicao1 = num1
    let posicao2 = num2
    let posicao3 = num3
    let posicao4 = num4
    let posicao5 = num5

    if (posicao1 > num2) {
        posicao2 = posicao1
        posicao1 = num2
    }
    if (posicao1 > num3) {
        posicao3 = posicao1
        posicao1 = num3
    }
    if (posicao1 > num4) {
        posicao4 = posicao1
        posicao1 = num4
    }
    if (posicao1 > num5) {
        posicao5 = posicao1
        posicao1 = num5
    }

    if (posicao5 < num1) {
        posicao5 = num1
    }
    if (posicao5 < num2) {
        posicao2 = posicao5
        posicao5 = num2
    }
    if (posicao5 < num3) {
        posicao3 = posicao5
        posicao5 = num3
    }
    if (posicao5 < num4) {
        posicao4 = posicao5
        posicao5 = num4
    }

    if (posicao2 > posicao3) {
        num2 = posicao2
        posicao2 = posicao3
        posicao3 = num2

    }
    if (posicao2 > posicao4) {
        num2 = posicao2
        posicao2 = posicao4
        posicao4 = num2
    }


    if (posicao4 < posicao3) {
        num4 = posicao4
        posicao4 = posicao3
        posicao3 = num4
    }


    posicao1 = String(posicao1)
    posicao2 = String(posicao2)
    posicao3 = String(posicao3)
    posicao4 = String(posicao4)
    posicao5 = String(posicao5)

    res.textContent = posicao5 + posicao4 + posicao3 + posicao2 + posicao1
}
let btnOrdenar = document.querySelector('.btnOrdenar').addEventListener('click', () => {
    ordenarDecrecente()
})