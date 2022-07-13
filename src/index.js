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
};

function decode(expr) {
    const splittedExpr = expr.match(/[\d*]{1,10}/g).map(el => el.length >= 10 ? el : '0'.repeat(10 - el.length) + el);
    return splittedExpr.map(el => {
        el = el == '*'.repeat(10)
            ? ' '
            : el.match(/\d{2}/g).map(el => {
                if (el == '10') return '.';
                if (el == '11') return '-';
                return '';
              }).join('');
        return el == ' ' ? el : MORSE_TABLE[el];
    }).join('');
}

module.exports = {
    decode
}