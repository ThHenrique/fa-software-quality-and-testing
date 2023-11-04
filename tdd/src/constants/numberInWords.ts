const units = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const dozens = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezesete', 'dezoito', 'dezenove'];
const dozensUntilHundred = [
  'dummy',
  'dummy',
  'vinte',
  'trinta',
  'quarenta',
  'cinquenta',
  'secenta',
  'setenta',
  'oitenta',
  'noventa',
];
const hundreds = [
  'dummy',
  'cento',
  'duzentos',
  'trezentos',
  'quatrocentos',
  'quinhentos',
  'seiscentos',
  'setecentos',
  'oitocentos',
  'novecentos',
];

const numberClasses = [units, dozens, dozensUntilHundred, hundreds];

const extensiveClass = [
  'dummy',
  'mil',
  'milhões',
  'bilhões',
  'trilhões',
  'quatrilhões',
  'quintilhões',
  'sextilhões',
  'septilhões',
  'octilhões',
  'nonilhões',
  'decilhões',
  'undecilhões',
  'duodecilhões',
  'tredecilhões',
];

export { numberClasses, extensiveClass };
