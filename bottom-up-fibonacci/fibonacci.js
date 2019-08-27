class fibonacciBU {
    getSequence = (number) => {
        this.sequenceArr = [];
        if (number === 0) {
            this.sequenceArr.push(0);
        } else if (number === 1) {
            this.sequenceArr.push(0);
            this.sequenceArr.push(1);
        } else {
            
        }
        
        return this.sequenceArr;
    }
}

module.exports = fibonacciBU;