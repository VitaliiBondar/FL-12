let a = parseFloat(prompt(`Enter a value of 'a'`, '1'));
let b = parseFloat(prompt(`Enter a value of 'b'`, '2'));
let c = parseFloat(prompt(`Enter a value of 'c'`, '1'));
const FOUR = 4;
const TWO = 2;
let x1,x2,d;

if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    d = b*b - FOUR*a*c;
    if (d < 0) {
        console.log('no solution');
    } else if (d === 0) {
        x1 = -b/TWO*a;
        console.log(`x = ${x1}`);
    } else {
        x1 = (-b + Math.sqrt(d))/(TWO*a);
        x2 = (-b - Math.sqrt(d))/(TWO*a);
        console.log(`x1 = ${x1}  and  x2 = ${x2}`);
    }
}
