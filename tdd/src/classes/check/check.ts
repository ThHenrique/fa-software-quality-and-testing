import { NumberInWords } from "../../utils/NumberInWords/NumberInWords.util";

export class Check {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  private getMonetaryValue(amount: number, isDecimal = false) {
    if (amount > 1) {
      if (isDecimal) {
        return "centavos"
      }
      return "reais"
    }
    else {
      if (isDecimal) {
        return "centavo"
      }
      return "real"
    }
  }


  getAmountInWords() {
    const numberInWords = new NumberInWords(this.amount)

    const numberTransform = numberInWords.transform();

    const monetaryValue = 'reais'

    return `${numberTransform} ${monetaryValue}`
  }
}
