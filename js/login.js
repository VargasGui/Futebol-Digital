var usuarios = [
    {"login": "Diogo", "senha": "Palmeiras"},
    {"login": "Guilherme", "senha": "Santos"},
    {"login": "Luiz", "senha": "Corinthians"},
];




function Login(event) {
    event.preventDefault();
    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario === "Diogo" && senha === "Palmeiras") {
      alert("dados corretos");
      window.location = "cadastro.html";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }





  
 /* function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "index.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
*/