const somar = require('./soma');


describe('Testes para a função somar', () => {
  
  test('Deve somar dois números positivos corretamente', () => {
    expect(somar(5, 10)).toBe(15);
  });

  test('Soma com Zero', () => {
    expect(somar(9, 0)).toBe(9);
  });

  test('Soma com numeros negativos', () => {
    expect(somar(20, -5)).toBe(15);
  });

  test('Soma de números decimais (ponto flutuante)', () => {
    expect(somar(0.1, 0.2)).toBeCloseTo(0.3);
  });

});



