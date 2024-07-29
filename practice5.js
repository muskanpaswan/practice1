function removeDuplicates(arr) {
    let addArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (filter(addArr,addArr[i]))
            console;
        else
            addArr.push(arr[i])
    }
    return addArr;
}
function filter(addArr, item) {
    for (let i = 0; i < addArr; i++) {
        if (addArr[i] === item)
            return true;
        else
            continue;
    }
    return false;
}
console.log(removeDuplicates([2, 2, 3, 5, 5, 11, 11, 13]))
console.log(removeDuplicates([1,1,2, 2, 3, 5, 5, 7, 7, 11, 11, 13]))