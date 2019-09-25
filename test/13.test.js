/**
 *  create by grguang
 *
 * @flow
 */
const {romanToInt} = require('../code/13.romanToInt');

describe('romanToInt', () => {
    it('romanToInt III', () => {
        expect(romanToInt("III")).toBe(3);
    });
    it('romanToInt IV', () => {
        expect(romanToInt("IV")).toBe(4);
    });
    it('romanToInt LVIII', () => {
        expect(romanToInt("LVIII")).toBe(58);
    });
    it('romanToInt MCMXCIV', () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });
});
