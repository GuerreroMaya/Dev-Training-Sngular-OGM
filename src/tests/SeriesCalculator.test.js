import SeriesCalculator from '../utilities/SeriesCalculator';

describe('SeriesCalculator Class', () => {
  let calculator;

  beforeAll(() => {
    calculator = new SeriesCalculator();
  });

  test('serie(1) should return a valid number', () => {
    const result = calculator.serie(1);
    expect(result).not.toBeNaN();
  });

  test('serie(2) should return a valid number', () => {
    const result = calculator.serie(2);
    expect(result).not.toBeNaN();
  });

  test('serie(3) should return 3.4 (approx)', () => {
    const result = calculator.serie(3);
    expect(result).toBeCloseTo(3.4, 5);
  });

  test('serie(4) should return a valid number', () => {
    const result = calculator.serie(4);
    expect(result).not.toBeNaN();
  });

  test('serie(5) should return a valid number', () => {
    const result = calculator.serie(5);
    expect(result).not.toBeNaN();
  });

  test('serie(6) should return a valid number', () => {
    const result = calculator.serie(6);
    expect(result).not.toBeNaN();
  });

  test('serie(7) should return a valid number', () => {
    const result = calculator.serie(7);
    expect(result).not.toBeNaN();
  });

  test('serie(8) should return a valid number', () => {
    const result = calculator.serie(8);
    expect(result).not.toBeNaN();
  });

  test('serie(9) should return a valid number', () => {
    const result = calculator.serie(9);
    expect(result).not.toBeNaN();
  });

  test('serie(10) should return a valid number', () => {
    const result = calculator.serie(10);
    expect(result).not.toBeNaN();
  });
});
