function anadirElemento(array, elemento) {
    return array.concat(elemento);
}

// He usado concat en vez de push, ya que el error me indicaba que "push" no existia, y despues de una busqueda,
// he podido ver que la funcion es llamada "concat"

module.exports = anadirElemento;