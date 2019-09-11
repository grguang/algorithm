/**
 *  create by grguang
 *
 * @flow
 */
const { add } = require('../code/hello');

describe('add', () => {
    it('add', () => {
        expect(add(2,1)).toBe(3);
        expect(add(2,2)).toBe(4);
        expect(add(2,3)).toBe(5);
    });
});
