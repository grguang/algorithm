/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     if (x === 0) {
//         return true;
//     }
//     if (x < 0) {
//         return false;
//     }
//     const str = x.toString();
//     // const reverseStr = str.split('').reverse().join('');
//     let reverseStr = '';
//     for(let i = 0; i < str.length; i++){
//         reverseStr = str[i] + reverseStr;
//     }
//     return str === reverseStr;
// };

// var isPalindrome = function (x) {
//     if (x === 0) {
//         return true;
//     }
//     if (x < 0) {
//         return false;
//     }
//     if (x < 10) {
//         return true;
//     }
//     const xStr = x.toString();
//     const xStrLength = xStr.length;
//     const lastIndex = xStrLength - 1;
//     const middleNum = Math.ceil(xStrLength / 2);
//     for (let i = 0; i < middleNum; i++) {
//         const symmetry = xStr[lastIndex - i];
//         if (xStr[i] !== symmetry) {
//             return false
//         }
//     }
//     return true
// };

var isPalindrome = function (x) {
    if (x === 0) {
        return true;
    }
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    const xStr = x.toString();
    const reverseStr = xStr.split('').reverse().join('');
    return reverseStr === xStr;
};


exports.isPalindrome = isPalindrome
