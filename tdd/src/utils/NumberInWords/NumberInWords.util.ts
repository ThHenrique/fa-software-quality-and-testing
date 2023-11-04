import { extensiveClass, numberClasses } from '../../constants/numberInWords';

export class NumberInWords {
  public static getDecimalNumber(number: number): number {
    const remainder = number % 1;
    const removeZerosToLeft = remainder.toFixed(2).substring(2);

    const decimal = Number(removeZerosToLeft);

    return decimal;
  }

  private static getNumberInWord(number: string): string {
    const output = [];
    if (number === '100') {
      return 'cem';
    } else if (number === '0') {
      return 'zero';
    } else {
      const numerals = number.toString().split('').reverse();

      const [unit, ten, hundred] = numerals;
      if (hundred && hundred != '0') {
        output.push(numberClasses[3][Number(hundred)]);
      }
      if (ten && ten == '1') {
        output.push(numberClasses[1][Number(unit)]);
      } else {
        if (ten && ten != '0') {
          output.push(numberClasses[2][Number(ten)]);
        }
        if (unit && unit != '0') {
          output.push(numberClasses[0][Number(unit)]);
        }
      }
      return output.join(' e ');
    }
  }

  public static transform(inputNumber: number): string {
    const output = [];
    const numbers: Array<{ number: number; name: string }> = [];

    let number = inputNumber.toString();
    while (number.length > 0) {
      const piece = number.length <= 3 ? number : number.substr(number.length - 3, 3);
      numbers.push({ number: +piece, name: this.getNumberInWord(piece) });
      number = number.length - 3 > 0 ? number.substr(0, number.length - 3) : '';
    }

    for (let i = numbers.length - 1; i > 0; i--)
      if (numbers[i].number != 0) {
        if (numbers[i].name == "um" && extensiveClass[i] == "mil") {
          output.push(
            extensiveClass[i]
          );
          continue;
        }

        output.push(
          numbers[i].name + ' ' + (numbers[i].number == 1 ? extensiveClass[i].replace('ões', 'ão') : extensiveClass[i]),
        );
      }

    if (numbers.length && numbers[0].number > 0) {
      output.push(
        `${numbers.length > 1 && (numbers[0].number < 100 || numbers[0].number % 100 == 0) ? 'e ' : ''}${numbers[0].name}`,
      );
    } else if (output.length > 1) {
      output.splice(output.length - 1, 0, 'e');
    }

    return output.join(' ');
  }
}
