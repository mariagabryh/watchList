
 const verSenha = document.getElementById("ver-senha");






verSenha.addEventListener("click", function(){
    if(senha.type ==="password"){
        senha.type = "text";

    }else {
        senha.type = "password";
    }
    verSenha.classList.toggle("ativo");
})