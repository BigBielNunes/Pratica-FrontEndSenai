var num1 = document.querySelector("#numero1")

var num2 = document.querySelector("#numero2")

var resultado = document.querySelector("#resultado")

var opcaoSoma = document.querySelector("#soma")

var opcaoSub = document.querySelector("#sub")

var opcaoMult = document.querySelector("#mult")

var opcaoDiv = document.querySelector("#div")

function exibirResultado(){
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    let resultadoFinal = 0

    if(opcaoSoma.checked){
        resultadoFinal = n1 + n2
    }else if(opcaoSub.checked){
        resultadoFinal = n1 - n2
    }else if(opcaoMult.checked){
        resultadoFinal = n1 * n2
    }else{
        resultadoFinal = n1 / n2
    }

    resultado.value = resultadoFinal
}
