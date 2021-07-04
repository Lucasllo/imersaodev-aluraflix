function adicionarFilme() {
  var filme = document.querySelector("#filme");
  var valorFilme = filme.value;
  listaFilmes(valorFilme);
  filme.value = "";
}

function listaFilmes(filme) {
  var listaFilmes = document.querySelector("#listaFilmes");
  var filmeIndicado = "<img src=" + filme + " class='filme'>"
  listaFilmes.innerHTML = listaFilmes.innerHTML + filmeIndicado
}
