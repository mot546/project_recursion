const mergeSort  = (array)=>{
    if(array.length == 0) return[];
    if(array.length == 1){
        return array;
    }
    const mid = Math.ceil(array.length / 2);
    let leftSide = array.slice(0,mid);
    let rightSide = array.slice(mid);
    let leftReturn = mergeSort(leftSide);
    let rightReturn = mergeSort(rightSide);
    let sorted = merge(leftReturn, rightReturn);
    return sorted;
}

console.log(mergeSort([5,4,6,3,4]))

function merge(left, right){
    let combined = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] > right[rightIndex]){
            combined.push(right[rightIndex]);
            rightIndex = rightIndex + 1;
        }
        if(left[leftIndex] < right[rightIndex]){
            combined.push(left[leftIndex]);
            leftIndex = leftIndex + 1;
        }
        if(left[leftIndex] === right[rightIndex]){
            combined.push(left[leftIndex]);
            leftIndex = leftIndex + 1;
            combined.push(right[rightIndex]);
            rightIndex = rightIndex + 1;
        }
    }
    while(leftIndex < left.length){
        combined.push(left[leftIndex]);
        leftIndex = leftIndex + 1;
    }
    while(rightIndex < right.length){
        combined.push(right[rightIndex]);
        rightIndex = rightIndex + 1;
    }
    return combined;
}