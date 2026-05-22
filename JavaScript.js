const form = document.getElementById("formcadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

// VALIDAR EMAIL
const regexEmail = /^[^/s@]+/.[^/s@]+$/;

if (!regexEmail. test(email)) {
     mensagem.innerHTML = "Email inválido!";
     return;

}

// VALIDAR SENHA
// letra + número + carctere especial + 8 caracteres

const regexSenha -
/^(?-.*[A-Za-z])(?-.*/d)(?-.*[@$!%*#?&]).{8,}$/;

if (!regexSenha.test(senha)) {

    mensagem.innerHTML =
    "Senha fraca! Use letra, número e caractere especial.";
    return

}

// JSON
const dados = {

    nome: nome,
    email: email
}
})