function mergeSort(arr){
    if (!arr || !arr.length) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    

    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

const merge = (arrFirst, arrSecond) => {
    const sortArr = [];
    let i = j = 0;
    while (i < arrFirst.length && j < arrSecond.length) {
        sortArr.push( (arrFirst[i] < arrSecond[j]) ?  arrFirst[i++] : arrSecond[j++]);
    }
    return [ ...sortArr, ...arrFirst.slice(i), ...arrSecond.slice(j) ];
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log([]);