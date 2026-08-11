function windowSize() {
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [width, height];
}

var tamanho = windowSize();

// Mostra direto na página
document.write("Largura da tela: " + tamanho[0] + " pixels<br>");
document.write("Altura da tela: " + tamanho[1] + " pixels");
