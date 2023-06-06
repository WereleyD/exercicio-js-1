function calcularMedia(){
    let primeiro = parseInt(document.getElementById("primeiro").value)
    let segundo = parseInt(document.getElementById("segundo").value)
    let terceiro = parseInt(document.getElementById("terceiro").value)

    let media = (primeiro + segundo + terceiro) / 3

    let resultado = document.getElementById("resultado").textContent = media
}