function makeNumber(str) {
    let result = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result.join('');
}
function countNumbers(str) {
    let result = {};
    makeNumber(str).split('').forEach(function (a) {
        if (result[a]) {
            ++result[a];
        } else {
            result[a] = 1;
        }
    });
    return result;
}
countNumbers('erer384jj4444666888jfd123');