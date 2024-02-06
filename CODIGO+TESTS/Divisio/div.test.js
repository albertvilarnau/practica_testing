
const division = require('./div');

test('Error sobre 0 en division', () => {
    expect(() => division(10, 0)).toThrow(Error);
});

test('Division normal', () => {
    expect(division(10, 5)).toBe(2);
});


