function calcularMedia(){
    let numero1 = Number(document.getElementById("primeiro").value)
    let numero2 = Number(document.getElementById("segundo").value)
    let numero3 = Number(document.getElementById("terceiro").value)

    let media = (numero1 + numero2 + numero3) / 3

    document.getElementById("resultado").innerHTML = '<p>Resultado: '+ media.toFixed(2) +'<p/>'
}