module.exports = function toReadable(number) {
    const library = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
        1000: "one thousand",
    };
    if (number >= 0 && number <= 20) {
        return library[number];
    }
    if (number >= 21 && number <= 99) {
        let x = number % 10;
        let y = number - (number % 10);
        let str;
        if (x !== 0) {
            str = `${library[y]} ${library[x]}`;
        }
        if (x === 0) {
            str = `${library[y]}`;
        }
        return str;
    }
    if (number >= 100 && number <= 999) {
        let z = number - (number % 100);
        let y;
        if (number % 100 >= 0 && number % 100 <= 19) {
            y = number % 100;
        } else {
            y = (number % 100) - (number % 10);
        }
        let x;
        if (y >= 0 && y <= 19) {
            x = 0;
        } else {
            x = number % 10;
        }
        let str;
        if (x !== 0 && y !== 0) {
            str = `${library[z]} ${library[y]} ${library[x]}`;
        }
        if (x === 0 && y !== 0) {
            str = `${library[z]} ${library[y]}`;
        }
        if (x === 0 && y === 0) {
            str = `${library[z]}`;
        }
        return str;
    }
};
