const { convertirAEuros, calcularCostoEnEuros } = require('./convertir');

test('Dolares a euros', () => {
    expect(convertirAEuros(100)).toBe(88);
});

test('Calcular costo en euros', () => {
    expect(calcularCostoEnEuros(5, 20)).toBe(88); // Asegúrate de ajustar este valor según tus cálculos esperados.
});
