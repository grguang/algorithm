/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length) return '';
    let minLengthStr = strs[0];
    strs.forEach(item => {
        const itemLength = item.length;
        if(itemLength < minLengthStr.length){
            minLengthStr = item;
        }
    });
    let sameStr = '';
    for(let i = 0; i< minLengthStr.length; i++){
        const everyStr = minLengthStr[i];
        const diffrent = strs.filter(item => {
            return item[i] !==everyStr
        });
        if(diffrent.length){
            return sameStr
        }else{
            sameStr = sameStr + everyStr;
        }
    }
    return sameStr;
};

exports.longestCommonPrefix = longestCommonPrefix;
