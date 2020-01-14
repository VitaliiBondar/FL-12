// 1. Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.
function convert(...args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            result.push(parseInt(args[i]));
        } else {
            result.push(args[i].toString());
        }
    }
    return result;
}
// 2. Write function, which iterates over array and executes function on each element.
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
// 3. Write function, which returns transformed array based on function, which passed as a second parameter (callback).
// If array contains a number as string, it should convert it and return as number. You’re allowed to change a body of
// that callback function if you need. Reuse function from task 2.
function mapArray(arr, callback){
    let result = [];
    executeForEach(arr, function(elem){
        result.push(callback(parseInt(elem)));
    });
    return result;
}
// 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function
// from task 2.
function filterArray(arr, callback){
    let result = [];
    executeForEach(arr, function(elem){
        if(callback(elem)){
            result.push(parseInt(elem));
        }
    });
    return result;
}
// 5. Write a function that reverses the string value passed into it.
function flipOver(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
// 6. Write a function which creates an array from the given range of numbers
function makeListFromRange(arr) {
    let result = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        result.push(i);
    }
    return result;
}
// 7. Write a function that accepts an array of object and returns new array of values by passed key name.
//     That function should not change the original array. Reuse function from task 2.
function getArrayOfKeys(arr, key) {
    let newArr = [];
    executeForEach(arr, function(elem) {
        newArr.push(elem[key]);
    });
    return newArr;
}
// 8. Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 30
// with '*'. It should return a new array with numbers and '*' instead of numbers lowest from 30. Reuse function from
// task 3.
function substitute(arr) {
    const minNumber = 30;
    return mapArray(arr, function (elem) {
        if (elem < minNumber) {
            elem = '*';
        }
        return elem;
    })
}
// 9. Write a function which returns a day number that was some amount of days ago from the passed date.
//     It should not change the given source date.
function getPastDay(date, daysAgo) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - daysAgo);
    return newDate.getDate();
}
// 10. Write a function that formats a date in such format "YYYY/M/d HH:mm".
function formatDate(time) {
    let year = time.getFullYear();
    let month = parseInt(time.getMonth()) + 1;
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();

    let result = `${year}/${month}/${date} ${hour}:${min}`;
    return result;
}