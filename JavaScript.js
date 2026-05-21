const form = document.getElementById("formcadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

// VALIDAR EMAIL
const regexEmail = /^[]
})