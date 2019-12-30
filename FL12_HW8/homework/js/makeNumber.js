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
makeNumber('erer384jjjfd123');