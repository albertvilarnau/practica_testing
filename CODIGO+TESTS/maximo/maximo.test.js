const maximo = require('./maximo');

test('Maximo del array', () => {
    expect(maximo('45617819')).toBe(9);
});

test('Maximo del array', () => {
    expect(maximo('123')).toBe(3);
});