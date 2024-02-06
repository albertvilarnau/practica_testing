const contieneElemento = require('./contiene');

test('Contiene elemento', () => {
    expect(contieneElemento('aeiou', 'f')).toBe(false);
});

test('Contiene elemento', () => {
    expect(contieneElemento('aeiou', 'a')).toBe(true);
});

