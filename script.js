function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 60 * i);
  });
}
const tituloPrincipal = document.querySelector(".titulo-principal");
const tituloServico = document.querySelector(".titulo-servico");

tituloPrincipal.addEventListener("focus", ativar());
tituloServico.addEventListener("focus", ativarTabela());

function ativar() {
  typeWrite(tituloPrincipal);
  // tituloPrincipal.style.color = "green";
}

function ativarTabela() {
  typeWrite(tituloServico);
}
