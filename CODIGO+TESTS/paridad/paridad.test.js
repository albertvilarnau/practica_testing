const Paridad = require('./paridad');

test('Paridad', () => {
    expect(Paridad(3)).toBe(false);
});

test('Paridad', () => {
    expect(Paridad(4)).toBe(true);
});

test('Paridad', () => {
    expect(Paridad(0)).toBe(true);
});

