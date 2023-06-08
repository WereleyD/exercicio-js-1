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

    document.getElementById("resultadoImc").innerHTML = "<br/><p class='resultado__texto'>Seu peso: " + peso + "</p><br/><p class='resultado__texto'>Sua altura: " + 
    altura + "</p><br/><p class='resultado__texto'>Seu IMC: " + imc.toFixed(2) + "</p>";
}

function cadastrarAluno(){
    let aluno = new Object();
    aluno.nome = prompt("Digite o nome do aluno");
    aluno.idade = prompt("Digite a idade do aluno");
    alert("Nome: " + aluno.nome + 
    "\nIdade: " + aluno.idade);

    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = `Nome do Aluno: ${aluno.nome} <br/>Idade do Aluno: ${aluno.idade}`;
    p.setAttribute("class", "resultado__texto")
    document.body.appendChild(div);
    div.appendChild(p);
}