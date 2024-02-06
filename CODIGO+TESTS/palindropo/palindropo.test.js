const esPalindromo = require('./palindropo');

test('Multiplicacion', () => {
    expect(esPalindromo('radar')).toBe(true);
});

test('Multiplicacion', () => {
    expect(esPalindromo('raul')).toBe(false);
});

test('Multiplicacion', () => {
    expect(esPalindromo('h h')).toBe(true);
});

