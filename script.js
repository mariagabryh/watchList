const  formulario = document.getElementById('form-cadastro');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');
const mensagem = document.getElementById("mensagem");
const verSenha = document.getElementById("ver-senha");
const verConfirmarSenha = document.getElementById("ver-confirmar-senha");



formulario.addEventListener("submit",function(event){
    event.preventDefault();
    if(senha.value.length < 7 ){
        mensagem.textContent = "Senha muito curta."
    } else if( senha.value.length > 20){
        mensagem.textContent = "Senha muito longa."
    } else if(confirmarSenha.value !== senha.value){
        mensagem.textContent = "Senhas diferentes!"
    } else {
        mensagem.textContent = "Cadastro realizado com sucesso!"
    }
});

verSenha.addEventListener("click", function(){
    if(senha.type ==="password"){
        senha.type = "text";

    }else {
        senha.type = "password";
    }
    verSenha.classList.toggle("ativo");
})

verConfirmarSenha.addEventListener("click",function( ){
    if(verConfirmarSenha.type ==="password"){
        confirmarSenha.type = "text";

    }else {
        confirmarSenha.type = "password"
    }
    verConfirmarSenha.classList.toggle("ativo");
})


