/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === 0) {
        return true;
    }
    if (x < 0) {
        return false;
    }
    const str = x.toString();
    // const reverseStr = str.split('').reverse().join('');
    let reverseStr = '';
    for(let i = 0; i < str.length; i++){
        reverseStr = str[i] + reverseStr;
    }
    return str === reverseStr;
};

exports.isPalindrome = isPalindrome
