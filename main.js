//Implemeta acesso para a tela de login
function acessar(){
  let loginEmail = document.getElementById("loginEmail").value;
  let loginSenha = document.getElementById("loginSenha").value;

  //implementa estrutura que testa se todos os campos foram preenchidos
  if(!loginEmail || !loginSenha){
    alert("Preencha todos os campos!");
  } else {
    alert("Login realizado com sucesso!");
  }
}