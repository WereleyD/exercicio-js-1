function calcularMedia(){
    let numero1 = Number(document.getElementById("primeiro").value);
    let numero2 = Number(document.getElementById("segundo").value);
    let numero3 = Number(document.getElementById("terceiro").value);

    let media = (numero1 + numero2 + numero3) / 3;

    document.getElementById("resultado").innerHTML = '<p>Resultado: '+ media.toFixed(2) +'<p/>';
}

function calcularIMC(){
    let peso = Number(prompt("Digite seu peso"));
    let altura = Number(prompt("Digite sua altura"));
    let imc = peso / (altura * altura);

    alert("Seu IMC: " + imc.toFixed(2));

    let resultado = document.getElementById("resultadoImc").innerHTML = "<br/><p class='resultado__texto'>Seu peso: " + peso + "</p><br/><p class='resultado__texto'>Sua altura: " + altura + "</p><br/><p class='resultado__texto'>Seu IMC: " + imc.toFixed(2) + "</p>";
}