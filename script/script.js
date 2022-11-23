document.getElementById("btnFinalizar").addEventListener("click", () => {
  const nCartao = document.getElementById("nCartao").value;
  const CVV = document.getElementById("CVV").value;
  let dataVenc = document.getElementById("dataVenc").value;
  dataVenc = dataVenc.split("-").reverse().join("/");
  const parcelas = document.getElementById("parcelas").value;
  const nome = document.getElementById("nome").value;
  let dataNasc = document.getElementById("dataNasc").value;
  dataNasc = dataNasc.split("-").reverse().join("/");
  const senha = document.getElementById("senha").value;
  const email = document.getElementById("email").value;
  const user = document.getElementById("user").value;

  if (
    (nCartao, CVV, dataNasc, dataVenc, parcelas, nome, senha, email, user == "")
  ) {
  } else {
    sendDb(
      nome,
      user,
      senha,
      email,
      dataNasc,
      nCartao,
      CVV,
      dataVenc,
      parcelas
    );
    window.open("./login.html");
  }
});

function sendDb(
  nome,
  user,
  senha,
  email,
  dataNasc,
  nCartao,
  CVV,
  dataVenc,
  parcelas
) {
  var settings = {
    url: "http://localhost:3000/user/create",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      nome: nome,
      login: user,
      senha: senha,
      email: email,
      dataNasc: dataNasc,
      cartao: nCartao,
      CVV: CVV,
      dataVenc: dataVenc,
      parcelas: parcelas,
    }),
  };

  $.ajax(settings).done(function (response) {
    alert(response);
  });
}
