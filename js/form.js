const btn = document.getElementById('btn');
const modal = new bootstrap.Modal(document.querySelector('.modal'));
var nomevalido = false;
var emailvalido = false;
var sexovalido = false;
var idadevalido = false;
var txtvalido = false;

var sexo;

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

const nomeModal = document.getElementById("nomeModal");
const idadeModal = document.getElementById("idadeModal");
const emailModal = document.getElementById("emailModal");
const sexoModal = document.getElementById("sexoModal");
const contatoModal = document.getElementById("contatoModal");
const textModal = document.getElementById("textModal");

const textArea = document.getElementById("txA");
const txSpan = document.getElementById("txSpan");

const limpa = document.getElementById("limpa");
btn.onclick = (e) => {
     let valido = false;
    const sobrenome = nome.value.split(" ")[1];
    if (nome.value.trim() == "" || sobrenome === undefined || nome.value.length < 4) {
        spanNome.innerHTML = "Insira o nome completo";
        spanNome.style.display = "block";
        spanNome.style.color = "red";
        nome.style.border = "red solid 1px";
        nomevalido = false;
    }
    else {
        spanNome.style.display = "none";
        nome.style.border = "solid 1px green";
        nomevalido = true;
    }
    if (!validateEmail(email.value)) {
        spanEmail.innerHTML = "Insira o email correto";
        spanEmail.style.display = "block";
        spanEmail.style.color = "red";
        email.style.border = "red solid 1px";
        emailvalido = false;
    }
    else {
        spanEmail.style.display = "none";
        email.style.border = "solid 1px green";
        emailvalido = true;
    }
    if (!masc.checked && !fem.checked) {
        sexoSpan.innerHTML = "Selecione uma das opções"
        sexoSpan.style.display = "block"
        sexoSpan.style.color = "red"
        sexovalido = false;
    }
    else {
        sexoSpan.style.display = "none"
        if(masc.checked){
            sexo = "Masculino"
        }
        else{
            sexo = "Feminino"
        }
        sexovalido = true;
    }
    if (idade.value <= 0 || idade.value > 99 || idade.value == "") {
        spanIdade.innerHTML = "Insira uma idade correta";
        spanIdade.style.display = "block";
        spanIdade.style.color = "red";
        idade.style.border = "red solid 1px";
        idadevalido = false;
    }
    else {
        spanIdade.style.display = "none";
        idade.style.border = "solid 1px green";
        idadevalido = true;
    }
    if (textArea.value == "") {
        txSpan.innerHTML = "Preencha com texto"
        txSpan.style.color = "red"
        txSpan.style.display = "block"
        textArea.style.border = "red solid 1px"
        txtvalido = false;
    }
    else {
        txSpan.style.display = "none"
        textArea.style.border = "green solid 1px"
        txtvalido = true;
    }
    if (!duvida.checked && !reclamacao.checked && !criticaConstrutiva.checked && !encontreiBug.checked){
        alerta.style.display = "block";
    }
    else{
        alerta.style.display = "none";
    }
    if (nomevalido && emailvalido && idadevalido && txtvalido){
            valido = true;
        }
        if (!valido) {
        }
        else {
            modal.show()
            nomeModal.innerHTML = "Nome: " + nome.value;
            idadeModal.innerHTML = "Idade: " + idade.value;
            emailModal.innerHTML = "E-mail: " + email.value;
            sexoModal.innerHTML = "Sexo: " + sexo;
            contatoModal.innerHTML = "Escolhas: " + verificaContato();
            textModal.innerHTML = "Texto: " + textArea.value;
        }

}

function validateEmail(email) {
    const regex = /^((?!@a\.))([^\s@]+)@((?:[a-z0-9-]+\.)+[a-z]{2,6})$/;
    const match = regex.test(email);
    return match;
}

function verificaContato(){
    let escolhas = " ";
    if(duvida.checked){
        escolhas = escolhas + "Dúvidas "
    }
    if(reclamacao.checked){
        escolhas = escolhas + "Reclamações "
    }
    if(criticaConstrutiva.checked){
        escolhas = escolhas + "Critica construtiva "
    }
    if(encontreiBug.checked){
        escolhas = escolhas + "Encontrei Bug\n"
    }
    return escolhas;
}

limpa.onclick = () => {
    nomeModal.innerHTML = "Nome: "
    idadeModal.innerHTML = "Idade: "
    emailModal.innerHTML = "E-mail: "
    sexoModal.innerHTML = "Sexo: "
    contatoModal.innerHTML = "Escolhas: "
    textModal.innerHTML = "Texto: "
    nome.value = "";
    email.value = "";
    idade.value = "";
    textArea.value = "";
    masc.value = "";
    fem.value = "";
    spanNome.style.display = "none";
    spanEmail.style.display = "none";
    spanIdade.style.display = "none";
  
    nome.style.border = "";
    email.style.border = "";
    idade.style.border = "";
  }