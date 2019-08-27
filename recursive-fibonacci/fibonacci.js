class Fibonacci {
    getSequence = (number) => {
        this.memo = {};
        this.sequenceArr = [];
        this.calculate(number);
        return this.sequenceArr;
    }
    
    calculate = (number) => {
        if (this.memo[number] !== undefined) {
            return this.memo[number];
        }
        
        if (number === 0) {
            this.memo[0] = 0;
            this.sequenceArr.push(0);
            return 0;
        } else if (number === 1) {
            this.calculate(0);
            this.memo[1] = 1;
            this.sequenceArr.push(1);
            return 1;
        }
        
        let num = this.calculate(number - 2) + this.calculate(number - 1);
        this.memo[number] = num;
        this.sequenceArr.push(num);
        return num;
    }
}

module.exports = Fibonacci; 