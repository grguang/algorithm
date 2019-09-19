/**
 *  create by grguang
 *
 * @flow
 */
const {reverse} = require('../code/7.integer-inversion');

describe('reverse', () => {
    it('reverse 1534236469', () => {
        expect(reverse(1534236469)).toEqual(0);
    });
    it('reverse 123', () => {
        expect(reverse(123)).toEqual(321);
    });
    it('reverse -123', () => {
        expect(reverse(-123)).toEqual(-321);
    });
});
