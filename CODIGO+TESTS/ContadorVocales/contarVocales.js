function contarVocales(cadena) {
    return (cadena.match(/[aeiou]/gi) || []).length;
}

module.exports = contarVocales;