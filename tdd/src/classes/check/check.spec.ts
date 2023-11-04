import { Check } from "./check";

const createSut = (amount: number): Check => {
  return new Check(amount)
}

describe('Check', () => {
  it('should have propertier amount', () => {
    const sut = createSut(1)

    expect(sut).toHaveProperty('amount', 1)
  });

  it('should have method get amount in words', () => {
    const sut = createSut(5)

    expect(sut.getAmountInWords()).toBe('Cinco reais')
  });

  it('should have value null, zero or undefined', () => {
    const sut = createSut(456)

    expect(sut.amount).not.toBe(0)
    expect(sut.amount).not.toBeUndefined()
    expect(sut.amount).not.toBeNull()
  });
});

describe("Check Monetary Value", () => {
  it('should monetary value is equal centavos', () => {
    const sut = createSut(10.50) as any

    const monetaryValue = sut.getMonetaryValue(50, true)

    expect(monetaryValue).toBe('centavos')
  });

  it('should monetary value is equal reais', () => {
    const sut = createSut(10.99) as any

    const monetaryValue = sut.getMonetaryValue(10, false)

    expect(monetaryValue).toBe('reais')
  });

  it('should monetary value is equal centavo', () => {
    const sut = createSut(10.02) as any

    const monetaryValue = sut.getMonetaryValue(1, true)

    expect(monetaryValue).toBe('centavo')
  });

  it('should monetary value is equal real', () => {
    const sut = createSut(1) as any

    const monetaryValue = sut.getMonetaryValue(1, false)

    expect(monetaryValue).toBe('real')
  });

  it('should um centavo', () => {
    const sut = createSut(0.01)

    expect(sut.getAmountInWords()).toBe('Um centavo')
  });

  it('should dez centavos', () => {
    const sut = createSut(0.10)

    expect(sut.getAmountInWords()).toBe('Dez centavos')
  });

  it('should Um real e um centavo', () => {
    const sut = createSut(1.01)

    expect(sut.getAmountInWords()).toBe('Um real e um centavo')
  });

  it('should mil reais e um centavo', () => {
    const sut = createSut(1000.01)

    expect(sut.getAmountInWords()).toBe('Mil reais e um centavo')
  });
})

describe("DOJO TEST", () => {
  it('should get quinze mil quatrocentos e quinze reais e dezesseis centavos', () => {
    const sut = createSut(15415.16)

    expect(sut.amount).not.toBe(0)
    expect(sut.amount).not.toBeUndefined()
    expect(sut.amount).not.toBeNull()
    expect(sut.getAmountInWords()).toBe('Quinze mil quatrocentos e quinze reais e dezesseis centavos')
  });

  it('should get cinco centavos', () => {
    const sut = createSut(0.05)

    expect(sut.getAmountInWords()).toBe('Cinco centavos')
  });

  it('should dois reais e vinte e cinco centavos', () => {
    const sut = createSut(2.25)

    expect(sut.getAmountInWords()).toBe('Dois reais e vinte e cinco centavos')
  });
})
