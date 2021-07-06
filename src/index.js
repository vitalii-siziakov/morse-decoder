const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decodeReplace(letter) {
    let result = letter;

    result = result.replace(/10/g, '.');
    result = result.replace(/11/g, '-');
    result = result.replace(/0/g,'');

    return result;
};

function decode(expr) {
    // write your solution here
    let exprArr = [];
    let letterLength = 10;

    for (let i = 0; i < expr.length; i = i + letterLength) {
        exprArr.push(expr.slice(i, i + letterLength));
    };

    for (let i = 0; i <  exprArr.length; i++) {
        exprArr[i] = MORSE_TABLE[decodeReplace(exprArr[i])];
    };

    return exprArr.join('');
}

module.exports = {
    decode
}