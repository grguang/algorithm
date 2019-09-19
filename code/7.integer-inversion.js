/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (!x) return 0;
    const str = x.toString();
    const res = str.split('').reverse();
    const lastValue = res[res.length - 1];
    if (lastValue === '0' || lastValue === '-') {
        res.pop();
        if(lastValue === '-'){
            res.unshift(lastValue);
        }

    }
    const result = Number(res.join(''));
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    const diffMax = result - max;
    const diffMin = min - result;
    if ((result > 0 && diffMax > 0) || (result < 0 && diffMin > 0)) {
        return 0
    }
    return result
};

exports.reverse = reverse;
