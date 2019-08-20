const Fibonacci = require('../fibonacci');

describe("Fibonacci Tests", function() {
    it("Returns valid sequences on base cases", function() {
        let fib = new Fibonacci();
        
        let sequenceArr = fib.get(0); 
        expect(sequenceArr.join(',')).toBe('0');
        
        sequenceArr = fib.get(1); 
        expect(sequenceArr.join(',')).toBe('0,1');
    });
    
    it("Returns valid sequences other cases", function() {
        let fib = new Fibonacci();
        
        let sequenceArr = fib.get(2); 
        expect(sequenceArr.join(',')).toBe('0,1,1');
        
    });
});