class Fibonacci {
    getSequence = (number) => {
        this.sequenceArr = [];
        this.calculate(number);
        return this.sequenceArr;
    }
    
    calculate = (number) => {
        if (this.sequenceArr[number] !== undefined) {
            return this.sequenceArr[number];
        }
        
        if (number === 0) {
            this.sequenceArr.push(0);
            return 0;
        } else if (number === 1) {
            this.calculate(0);
            this.sequenceArr.push(1);
            return 1;
        }
        
        let num = this.calculate(number - 2) + this.calculate(number - 1);
        this.sequenceArr.push(num);
        return num;
    }
}

module.exports = Fibonacci; 