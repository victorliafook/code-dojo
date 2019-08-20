
describe("Fibonacci Tests", function() {
    it("Returns valid sequences", function() {
        let fib = new Fibonacci();
        
        let sequenceArr = fib.get(0); 
        expect(sequenceArr.join(',')).toBe('0');
    });
});