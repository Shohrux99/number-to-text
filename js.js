function humanize(num){
  var ones = ['', 'bir', 'ikki', 'uch', 'to`rt', 'besh', 'olti', 'yetti', 'sakkiz', 'toqqiz', 'on'];
  var tens = ['', 'on', 'yigirma', 'ottiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'toqson'];
  var hundreds = ['', 'bir yuz', 'ikki yuz', 'uch yuz', 'tort yuz', 'besh yuz', 'olti yuz', 'yetti yuz', 'sakkiz yuz', 'toqqiz yuz'];
  var thousands = ['', 'bir ming', 'ikki ming', 'uch ming','tort ming', 'besh ming', 'olti ming', 'yetti ming', 'sakkiz ming', 'toqqiz ming'];
  var millions = ['', 'bir million', 'ikki million', 'uch million', 'tort million', 'besh million', 'olti million', 'yetti million', 'sakkiz million', 'toqqiz million'];
  var milliards = ['', 'bir milliard', 'ikki milliard', 'uch milliard', 'tort milliard', 'besh milliard', 'olti milliard', 'yetti milliard', 'sakkiz milliard', 'toqqiz milliard'];
  var numString = num.toString();
  // number < 0
  if (num < 0) throw new Error('Manfiy son keldi!');
  // number = 0
  if (num === 0) return 'Nol';
  // 1 - 9
  if (num < 10) {
    return ones[num];
  }
  // 10 - 99
  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }
  // 100 - 999
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return hundreds[numString[0]];
    else
      return hundreds[numString[0]] + ' ' + tens[numString[1]] + ' ' + ones[numString[2]];
  }
  // 1000 - 9999
  if (numString.length === 4) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0') {
        return thousands[numString[0]]
    } else {
      return thousands[numString[0]] + ' ' + hundreds[numString[1]] + ' ' + tens[numString[2]] + ' ' +  ones[numString[3]];
    }
  }
  // 10.000 - 99.999
  if (numString.length === 5) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0' && numString[4] === '0') {
        return tens[numString[0]] + ' ming'
    } else {
      return tens[numString[0]] + ' ' + thousands[numString[1]] + ' ' + hundreds[numString[2]] + ' ' +  tens[numString[3]] + ' ' +  ones[numString[4]];
    }
  }
  // 100.000 - 999.999
  if (numString.length === 6) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0' && numString[4] === '0' && numString[5] === '0') {
        return hundreds[numString[0]] + ' ming'
    } else {
      return hundreds[numString[0]] + ' ' + tens[numString[1]] + ' ' + thousands[numString[2]] + ' ' +  hundreds[numString[3]] + ' ' +  tens[numString[4]] + ' ' +  ones[numString[5]];
    }
  }
  // 1.000.000 - 9.999.999
  if (numString.length === 7) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0' && numString[4] === '0' && numString[5] === '0' && numString[6] === '0') {
        return ones[numString[0]] + ' million'
    } else {
      return millions[numString[0]] + ' ' + hundreds[numString[1]] + ' ' + tens[numString[2]] + ' ' + thousands[numString[3]] + ' ' +  hundreds[numString[4]] + ' ' +  tens[numString[5]] + ' ' +  ones[numString[6]];
    }
  }
  // 10.000.000 - 99.999.999
  if (numString.length === 8) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0' && numString[4] === '0' && numString[5] === '0' && numString[6] === '0' && numString[7] === '0') {
        return tens[numString[0]] + ' million'
    } else {
      return tens[numString[0]] + ' ' + millions[numString[1]] + ' ' + hundreds[numString[2]] + ' ' + tens[numString[3]] + ' ' +  thousands[numString[4]] + ' ' +  hundreds[numString[5]] + ' ' +  tens[numString[6]] + ' ' +  ones[numString[7]];
    }
  }
  // 100.000.000 - 999.999.999
  if (numString.length === 9) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0' && numString[4] === '0' && numString[5] === '0' && numString[6] === '0' && numString[7] === '0' && numString[8] === '0') {
        return hundreds[numString[0]] + ' million'
    } else {
      return hundreds[numString[0]] + ' ' + tens[numString[1]] + ' ' + millions[numString[2]] + ' ' + hundreds[numString[3]] + ' ' +  tens[numString[4]] + ' ' +  thousands[numString[5]] + ' ' +  hundreds[numString[6]] + ' ' +  tens[numString[7]] + ' ' + ones[numString[8]];
    }
  }
  // 1.000.000.000 - 9.999.999.999
  if (numString.length === 10) {
    if (numString[1] === '0' && numString[2] === '0' && numString[3] === '0' && numString[4] === '0' && numString[5] === '0' && numString[6] === '0' && numString[7] === '0' && numString[8] === '0' && numString[9] === '0') {
        return milliards[numString[0]]
    } else {
      return milliards[numString[0]] + ' ' + hundreds[numString[1]] + ' ' + tens[numString[2]] + ' ' + millions[numString[3]] + ' ' + hundreds[numString[4]] + ' ' +  tens[numString[5]] + ' ' +  thousands[numString[6]] + ' ' +  hundreds[numString[7]] + ' ' +  tens[numString[8]] + ' ' + ones[numString[9]];
    }
  }
}

var number = +prompt('sonni kirit')

alert(humanize(number))