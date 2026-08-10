//Criando objeto com o Literal object
var shape = {
  width: 6,
  height: 4,
  getArea: function() {
    return this.width * this.height
  }
}

document.write(shape.getArea())