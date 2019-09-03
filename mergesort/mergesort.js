var mergeSort = function(someArray) {
    if (someArray.length <= 1) return someArray;
    
    let firstHalf, secondHalf;
    let splitIndex = Math.floor(someArray.length / 2);
    firstHalf = mergeSort(someArray.slice(0, splitIndex));
    secondHalf = mergeSort(someArray.slice(splitIndex));
    
    return mergeArrays(firstHalf, secondHalf);
};

var mergeArrays = function(first, second) {
    let i = 0; j = 0;
    
    let mergedArray = [];
    while (i < first.length || j < second.length) {
        iElem = first[i] !== undefined ? first[i] : Number.MAX_SAFE_INTEGER;
        jElem = second[j] !== undefined ? second[j] : Number.MAX_SAFE_INTEGER;
        
        if (iElem < jElem) {
            mergedArray.push(iElem);
            i++;
        } else {
            mergedArray.push(jElem);
            j++;
        }
    }
    
    return mergedArray;
}

module.exports = {
    sort: mergeSort,
    merge: mergeArrays
};