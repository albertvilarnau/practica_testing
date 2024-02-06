const longitud = require('./longitud');

test('Division normal', () => {
    expect(longitud('hola')).toBe(4);
});