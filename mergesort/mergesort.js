var mergeSort = function(someArray) {
    
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