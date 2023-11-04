import { NumberInWords } from './NumberInWords.util';

afterEach(() => jest.clearAllMocks());

describe('Testando a classe NumberInWords', () => {
  it('Verificando parametros', () => {
    const sut = NumberInWords;
    const numberInWordsSpy = jest.spyOn(sut, 'transform');

    sut.transform(5);
    expect(numberInWordsSpy).toHaveBeenCalledTimes(1);
  });

  it('should decimal number is 75', () => {
    const sut = NumberInWords;

    const decimalValueSpy = sut.getDecimalNumber(54.75);

    expect(decimalValueSpy).toBe(75);
  });

  it('should decimal number is 0', () => {
    const sut = NumberInWords;

    const decimalValueSpy = sut.getDecimalNumber(100.0);

    expect(decimalValueSpy).toBe(0);
  });
});

describe('Número por extenso', () => {
  it('5 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(5);

    expect(result).toBe('cinco');
  });

  it('10 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(10);

    expect(result).toBe('dez');
  });

  it('15 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(15);

    expect(result).toBe('quinze');
  });

  it('20 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(20);

    expect(result).toBe('vinte');
  });

  it('99 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(99);

    expect(result).toBe('noventa e nove');
  });

  it('100 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(100);

    expect(result).toBe('cem');
  });

  it('101 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(101);

    expect(result).toBe('cento e um');
  });

  it('110 por extenso', () => {
    const sut = NumberInWords;

    const result = sut.transform(110);

    expect(result).toBe('cento e dez');
  });

  it('999 por extenso', () => {
    const sut = NumberInWords

    const result = sut.transform(999);

    expect(result).toBe('novecentos e noventa e nove');
  });

  it('1000 por extenso', () => {
    const sut = NumberInWords

    const result = sut.transform(1000);

    expect(result).toBe('mil');
  });

  it('1001 por extenso', () => {
    const sut = NumberInWords

    const result = sut.transform(1001);

    expect(result).toBe('mil e um');
  });

  it('1559 por extenso', () => {
    const sut = NumberInWords

    const result = sut.transform(1559);

    expect(result).toBe('mil quinhentos e cinquenta e nove');
  });
});
