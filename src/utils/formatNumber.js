import numeral from 'numeral';

export function fCpf(number) {
  const format = number ? numeral(number).format('000.000.000-00') : '';
  return result(format, '-00');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fCurrency(number) {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}

export function fMoney(number) {
  const format = number ? numeral(number).format('$0,0.00') : '';
  return format;
}

export function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

export function fDecimal(number) {
  if (typeof number !== 'number') {
    return ''; // Retorna uma string vazia se o número não for válido
  }
  return number.toFixed(2); // Formata o número com duas casas decimais
}

export function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

function result(format, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}
