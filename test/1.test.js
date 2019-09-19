/**
 *  create by grguang
 *
 * @flow
 */
const {twoSum} = require('../code/1.two-sum');

describe('twoSum', () => {
    it('twoSum', () => {
        expect(twoSum([2, 1, 3, 9], 3)).toEqual([0, 1]);
    });
});
