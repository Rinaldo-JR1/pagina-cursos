document.getElementById("btnFinalizar").addEventListener("click", () => {
  // Verificar os campos do formulario de cadastro
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
    (nCartao,
    CVV,
    dataNasc,
    dataVenc,
    parcelas,
    nome,
    senha,
    email,
    user == "" || senha.length < 8 || user.length < 8)
  ) {
    return;
  } else {
    window.open("./login.html");
  }
});
