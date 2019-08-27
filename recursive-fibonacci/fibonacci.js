class Fibonacci {
    constructor() {
        this.sequenceArr = [];
    }
    
    getSequence = (number) => {
        this.calculate(number);
        return this.sequenceArr;
    }
    
    calculate = (number) => {
        if (number === 0) {
            this.sequenceArr.push(0);
            return 0;
        } else if (number === 1) {
            this.sequenceArr.push(1);
            return 1;
        }
        let num = this.calculate(number - 2) + this.calculate(number - 1);
        this.sequenceArr.push(num);
        return num;
    }
}

module.exports = Fibonacci; 