/**
 *  create by grguang
 *
 * @flow
 */
const {isPalindrome} = require('../code/234.isPalindrome');

describe('isPalindrome', () => {
    it('isPalindrome [1,2]', () => {
        expect(isPalindrome({val: 1, next: {val: 2, next: null}})).toBe(false);
    });
    it('isPalindrome [1]', () => {
        expect(isPalindrome({val: 1, next: null})).toBe(true);
    });
    it('isPalindrome [1,2,1]', () => {
        expect(isPalindrome({val: 1, next: {val: 2, next: {val: 1, next: null}}})).toBe(true);
    });
    it('isPalindrome [1,2,2,1]', () => {
        expect(isPalindrome({val: 1, next: {val: 2, next: {val: 2, next: {val: 1, next: null}}}})).toBe(true);
    });
});
