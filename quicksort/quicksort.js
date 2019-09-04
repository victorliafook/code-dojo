var sort = function(someArray) {
    //console.log('ARRAY', someArray);
    //console.log('LENGTH', someArray.length);
    quicksort(someArray, 0, someArray.length - 1);
    return someArray;
};

var quicksort = function(someArray, from, to) {
    if (from >= to) return;
    
    let pivot = partition(someArray, from, to);
    quicksort(someArray, from, pivot - 1);
    quicksort(someArray, pivot + 1, to);
};

var partition = function(someArray, from, to) {
    // console.log('ARRAY', someArray);
    // console.log('PARTITION', from, to);
    let pivot = someArray[from];
    let i = from + 1, j = to;
    
    while (true) {
        while (someArray[i] < pivot) {
            i++;
        }
        
        while (someArray[j] >= pivot) {
            j--;
        }
        if (i >= j) break;

        let aux = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = aux;
        
    }
    
    someArray[from] = someArray[j];
    someArray[j] = pivot;
    //console.log('PARTITIONED IN', i, j);
    return j;
}

module.exports = {
    sort: sort
};