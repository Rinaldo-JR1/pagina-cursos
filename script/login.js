document.getElementById("enviar").addEventListener("click", () => {
  const senha = document.getElementById("senha");
  const usuario = document.getElementById("usuario");
  let auth = false
  if ((senha, usuario == "")) {
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
      console.log(auth)
      auth = response.auth
    });
  }
  window.open("./teste.html");
});
