const QuickSort = require('../quicksort');

describe("QuickSort Tests", function() {
    it("works for edge cases - empty, 1 and 2 elements", function() {
        let sortedArray = QuickSort.sort([]); 
        expect(sortedArray).toEqual([]);
        
        sortedArray = QuickSort.sort([0]); 
        expect(sortedArray).toEqual([0]);
        
        sortedArray = QuickSort.sort([1,0]); 
        expect(sortedArray).toEqual([0,1]);
    });
    
    it("sorts random arrays", function() {
        let randomValues = generateRandomValuedArray(50, 100);
        let QuickSorted = QuickSort.sort(randomValues);
        randomValues.sort(ascendingSort);
        
        expect(QuickSorted).toEqual(randomValues);
        
        randomValues = generateRandomValuedArray(50, 100);
        QuickSorted = QuickSort.sort(randomValues);
        randomValues.sort(ascendingSort);
        
        expect(QuickSorted).toEqual(randomValues);
    });
    
    it("works for descending sorted arrays", function() {
        let sortedArray = QuickSort.sort([10,9,8,7,6,5,4,3,2,1,0]); 
        expect(sortedArray).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    });
    
    var generateRandomValuedArray = function (len, max) {
        let values = Array(len).fill().map(() => {
            return Math.round(Math.random() * max)
        });
        
        return values;
    };
    
    var ascendingSort = function(a, b) {
        return a - b;
    }
    
    var descendingSort = function(a, b) {
        return b - a;
    }
});