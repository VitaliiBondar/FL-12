function isBigger(firstValue, secondValue) {
    return firstValue > secondValue;
}
function isSmaller(firstValue, secondValue) {
    return !isBigger(firstValue, secondValue);
}
isSmaller(5, -1);