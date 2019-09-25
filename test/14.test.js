/**
 *  create by grguang
 *
 * @flow
 */
const {longestCommonPrefix} = require('../code/14.longestCommonPrefix');

describe('longestCommonPrefix', () => {
    it('longestCommonPrefix ["flower","flow","flight"]', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
    });
    it('longestCommonPrefix ["dog","racecar","car"]', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
    });
});
