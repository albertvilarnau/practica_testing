
const contarVocales = require('./contarVocales');

test('Contador de Vocales con vocales', () => {
    expect(contarVocales('aeiou')).toBe(5);
});

test('Contador de Vocales vacio', () => {
    expect(contarVocales('')).toBe(0);
});

test('Contador de Vocales sin vocales', () => {
    expect(contarVocales('dfgh')).toBe(0);
});



