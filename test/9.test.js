/**
 *  create by grguang
 *
 * @flow
 */
const {isPalindrome} = require('../code/9.palindrome');

describe('isPalindrome', () => {
    it('isPalindrome 121', () => {
        expect(isPalindrome(121)).toBe(true);
    });
    it('isPalindrome 0', () => {
        expect(isPalindrome(0)).toBe(true);
    });
    it('isPalindrome 1000000001', () => {
        expect(isPalindrome(1000000001)).toBe(true);
    });
});
