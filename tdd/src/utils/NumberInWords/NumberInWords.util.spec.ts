import { NumberInWords } from './NumberInWords.util';

afterEach(() => jest.clearAllMocks());

describe('Testando a classe NumberInWords', () => {
  it('Verificando parametros', () => {
    const sut = new NumberInWords(5);
    const numberInWordsSpy = jest.spyOn(sut, 'transform');

    expect(sut).toHaveProperty('number', 5);
    sut.transform();
    expect(numberInWordsSpy).toHaveBeenCalledTimes(1);
  });

  it('should decimal number is 75', () => {
    const sut = new NumberInWords(54.75) as any;

    const decimalValueSpy = sut.getDecimalNumber();

    expect(decimalValueSpy).toBe(75);
  });

  it('should decimal number is 0', () => {
    const sut = new NumberInWords(100.0) as any;

    const decimalValueSpy = sut.getDecimalNumber();

    expect(decimalValueSpy).toBe(0);
  });
});

describe('Número por extenso', () => {
  // it('5 por extenso', () => {
  //   const sut = new NumberInWords(5);

  //   const result = sut.transform();

  //   expect(result).toBe('cinco');
  // });

  // it('10 por extenso', () => {
  //   const sut = new NumberInWords(10);

  //   const result = sut.transform();

  //   expect(result).toBe('dez');
  // });

  // it('15 por extenso', () => {
  //   const sut = new NumberInWords(15);

  //   const result = sut.transform();

  //   expect(result).toBe('quinze');
  // });

  // it('20 por extenso', () => {
  //   const sut = new NumberInWords(20);

  //   const result = sut.transform();

  //   expect(result).toBe('vinte');
  // });

  // it('99 por extenso', () => {
  //   const sut = new NumberInWords(99);

  //   const result = sut.transform();

  //   expect(result).toBe('noventa e nove');
  // });

  // it('100 por extenso', () => {
  //   const sut = new NumberInWords(100);

  //   const result = sut.transform();

  //   expect(result).toBe('cem');
  // });

  // it('101 por extenso', () => {
  //   const sut = new NumberInWords(101);

  //   const result = sut.transform();

  //   expect(result).toBe('cento e um');
  // });

  // it('110 por extenso', () => {
  //   const sut = new NumberInWords(110);

  //   const result = sut.transform();

  //   expect(result).toBe('cento e dez');
  // });

  // it('999 por extenso', () => {
  //   const sut = new NumberInWords(999);

  //   const result = sut.transform();

  //   expect(result).toBe('novecentos e noventa e nove');
  // });

  it('1000 por extenso', () => {
    const sut = new NumberInWords(1000);

    const result = sut.transform();

    expect(result).toBe('mil');
  });

  it('1001 por extenso', () => {
    const sut = new NumberInWords(1001);

    const result = sut.transform();

    expect(result).toBe('mil e um');
  });

  it('1559 por extenso', () => {
    const sut = new NumberInWords(1559);

    const result = sut.transform();

    expect(result).toBe('mil quinhentos e cinquenta e nove');
  });
});
