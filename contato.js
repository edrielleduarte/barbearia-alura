function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 60 * i);
  });
}
const titulobarbearia = document.querySelector(".titulobarbearia");
titulobarbearia.addEventListener("focus", ativarTituloContato());
function ativarTituloContato() {
  typeWrite(titulobarbearia);
}
