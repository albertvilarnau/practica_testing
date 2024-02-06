const anadirElemento = require('./anadir');

test('Añadir elemento', () => {
    expect(anadirElemento('a', 'a')).toBe('aa');
});

