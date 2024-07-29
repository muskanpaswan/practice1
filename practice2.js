function sumArr(arr) {
    var add = 0;
    for (let i = 0; i < arr.length; i++) {
        add = add + arr[i];
    }
    console.log(add);
}
sumArr([1, 3, 5, 7, 8])
sumArr([-1, -3, -5, -7, -8])