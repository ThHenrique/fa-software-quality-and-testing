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
    const decimalAmount = NumberInWords.getDecimalNumber(this.amount)
    const amountInt = Math.floor(this.amount)

    const amountIntTransform = NumberInWords.transform(amountInt);

    let output = amountIntTransform + " " + this.getMonetaryValue(amountInt)
    if (decimalAmount) {
      const decimalAmountInWords = NumberInWords.transform(decimalAmount);

      let decimalAmountOutput = `${decimalAmountInWords} ${this.getMonetaryValue(decimalAmount, true)}`
      if (amountInt == 0) {
        output = decimalAmountOutput
      } else {
        output += ` e ${decimalAmountOutput}`
      }
    }
    return output[0].toUpperCase() + output.substr(1)
  }
}
