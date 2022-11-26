document.getElementById("enviar").addEventListener("click", ($event) => {
  $event.preventDefault();
  const senha = document.getElementById("senha").value;
  const usuario = document.getElementById("usuario").value;
  let auth = false;
  if (senha == "" || usuario == "") {
  } else {
    var settings = {
      url: "http://localhost:3000/user/login",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        login: usuario,
        senha: senha,
      }),
    };
    $.ajax(settings).done(function (response) {
      auth = response.auth;
      if (auth || auth == "true") {
        window.open(" ./teste.html");
      } else if (auth == false || auth == "false") {
        window.alert("Usuario não encontrado tente novamente");
      }
    });
  }
});
