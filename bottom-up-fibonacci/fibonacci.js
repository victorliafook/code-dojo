class fibonacciBU {
    getSequence = (number) => {
        this.sequenceArr = [];
        if (number === 0) {
            this.sequenceArr.push(0);
        } else {
            this.sequenceArr.push(0);
            this.sequenceArr.push(1);
            
            for (let i = 2; i <= number; i++) {
                let sum = 0
                if (this.sequenceArr[i - 2] !== undefined) {
                    sum += this.sequenceArr[i - 2];
                }
                
                if (this.sequenceArr[i - 1] !== undefined) {
                    sum += this.sequenceArr[i - 1];
                }
                this.sequenceArr.push(sum);
            }
        }
        
        return this.sequenceArr;
    }
}

module.exports = fibonacciBU;