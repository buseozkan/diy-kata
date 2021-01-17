const numberToReversedDigits = number => {
    let x = number.toString().split('').reverse()
    let y = x.map(string => parseInt(string));
    return y
};

module.exports = numberToReversedDigits;
