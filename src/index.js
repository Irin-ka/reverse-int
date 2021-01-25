module.exports = function reverse (n) {
    let str = String(n);
    let arr = str.split('').reverse().join('');
    let val = Number.parseInt(arr);
    return val;
}
