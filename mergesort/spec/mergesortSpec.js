const Mergesort = require('../mergesort');

describe("MergeSort Tests", function() {
    it("works for edge cases - empty, 1 and 2 elements", function() {
        let sortedArray = Mergesort.sort([]); 
        expect(sortedArray).toEqual([]);
        
        sortedArray = Mergesort.sort([0]); 
        expect(sortedArray).toEqual([0]);
        
        sortedArray = Mergesort.sort([1,0]); 
        expect(sortedArray).toEqual([0,1]);
    });
    
    it("sorts random arrays", function() {
        let randomValues = generateRandomValuedArray(50, 100);
        let mergesorted = Mergesort.sort(randomValues);
        randomValues.sort(ascendingSort);
        
        expect(mergesorted).toEqual(randomValues);
        
        randomValues = generateRandomValuedArray(50, 100);
        mergesorted = Mergesort.sort(randomValues);
        randomValues.sort(ascendingSort);
        
        expect(mergesorted).toEqual(randomValues);
    });
    
    var generateRandomValuedArray = function (len, max) {
        let values = Array(len).fill().map(() => {
            Math.round(Math.random() * max)
        });
    };
    
    var ascendingSort = function(a, b) {
        return a - b;
    }
});