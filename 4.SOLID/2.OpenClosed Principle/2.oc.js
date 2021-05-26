// You should be able to extend a classes behaviour, without modifying it.
// Robert C. Martin

class DecimalToBinary {
    // Some other helper functions …

    dec2bin(number) {
        return parseInt(number, 10).toString(2);
    }
}

// vs ///////////////////////


class NumberConverter {
    isNumber(number) {
        // Just an example of a helper function
        return true;
    }

    convertBase(number, fromBase, toBase) {
        // A naive implementation without error checking etc.
        return parseInt(number, fromBase).toString(toBase);
    }
}

class DecimalToBinary extends NumberConverter {
    isDecimalNumber(number) {
        // Just an example of a helper function, not actual implementation
        return true;
    }

    dec2bin(number) {
        return this.convertBase(number, 10, 2);
    }
}

class BinaryToDecimal extends NumberConverter {
    isBinaryNumber(number) {
        // Just an example of a helper function, not actual implementation
        return true;
    }

    bin2dec(number) {
        return this.convertBase(number, 2, 10);
    }
}