/**
 *
 * create by grg on 2022/7/7
 *
 * @flow
 */
const {PlayBoy} = require('../code/chainCallsClass');

describe('isPalindrome', () => {
    it('PlayBoy', () => {
        const tom = new PlayBoy('Tom');

        tom.sayHi('Lili').sleep(2).play('王者').sleep(3).play('手机')
    });
});
