const esCorreoValido = require('./correo');

test('Correo es valido', () => {
    expect(esCorreoValido('example@mail.com')).toBe(true);
});

test('Correo es valido', () => {
    expect(esCorreoValido('examplemail.com')).toBe(false);
});

test('Correo es valido', () => {
    expect(esCorreoValido('example@.com')).toBe(false);
});