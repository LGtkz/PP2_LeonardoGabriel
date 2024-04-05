const btn = document.getElementById('btn');
const modal = new bootstrap.Modal(document.querySelector('.modal'));
var valido = false

const nome = document.getElementById('nome');
const spanNome = document.getElementById('spanNome');

const email = document.getElementById("email");
const spanEmail = document.getElementById("spanEmail");

const idade = document.getElementById("idade");
const spanIdade = document.getElementById("spanIdade");

const masc = document.getElementById("masculino");
const fem = document.getElementById("feminino");
const sexoSpan = document.getElementById("sexoSpan");

const duvida = document.getElementById("duvida");
const reclamacao = document.getElementById("reclamacao");
const criticaConstrutiva = document.getElementById("critica-construtiva");
const encontreiBug = document.getElementById("encontrei-bug");
const alerta = document.getElementById("alerta");
alerta.style.display = "none";

btn.onclick = (e) => {
    const sobrenome = nome.value.split(" ")[1];
    if(nome.value.trim() == "" || sobrenome === undefined || nome.value.length < 4){
        spanNome.innerHTML = "Insira o nome completo";
        spanNome.style.display = "block";
        spanNome.style.color = "red";
        nome.style.border = "red solid 1px";
        valido = false;
    }
    else{
        spanNome.style.display = "none";
        nome.style.border = "solid 1px green";
        valido = true;
    }
    if(!validateEmail(email.value)){
        spanEmail.innerHTML = "Insira o email correto";
        spanEmail.style.display = "block";
        spanEmail.style.color = "red";
        email.style.border = "red solid 1px";
        valido = false;
    }
    else{
        spanEmail.style.display = "none";
        email.style.border = "solid 1px green";
        valido = true;
    }
    if(idade.value <= 0 || idade.value > 99 || idade.value == ""){
        spanIdade.innerHTML = "Insira uma idade correta";
        spanIdade.style.display = "block";
        spanIdade.style.color = "red";
        idade.style.border = "red solid 1px";
        valido = false;
    }
    else{
        spanIdade.style.display = "none";
        idade.style.border = "solid 1px green";
        valido = true;
    }
    if(!masc.checked && !fem.checked){
        sexoSpan.innerHTML = "Selecione uma das opções"
        sexoSpan.style.display = "block"
        sexoSpan.style.color = "red"
    }
    else{
        sexoSpan.style.display = "none"
    }
    if(!duvida.checked && !reclamacao.checked && !criticaConstrutiva.checked && !encontreiBug){
        alerta.style.display = "block";
    }
    else{
        alerta.style.display = "none"
    }

}

function validateEmail(email) {
    const regex = /^((?!@a\.))([^\s@]+)@((?:[a-z0-9-]+\.)+[a-z]{2,6})$/;
    const match = regex.test(email);
    return match;
}