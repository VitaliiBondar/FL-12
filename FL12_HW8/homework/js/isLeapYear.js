function isLeapYear(arg) {
    let date = new Date(arg);
    if (!isNaN(date)) {
        let year = date.getFullYear();
        if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
            return `${year} is a leap year`;
        } else {
            return `${year} is not a leap year`;
        }
    } else {
        return date;
    }
}
isLeapYear('2020-01-01 00:00:00');