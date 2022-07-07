/**
 *
 * create by grg on 2022/7/7
 *
 * @flow
 */
// 实现一个链式调用类，可以 sleep 一段时间后，继续调用；

class PlayBoy {
    constructor(name) {
        this.name = name;
        this.queue = [];

        setTimeout(() => {
            this.next();
        }, 0)
    }

    play(p) {
        this.queue.push(() => {
            console.log(`我在玩${p}`);
            this.next();
        });

        return this;
    }

    sayHi(name) {
        this.queue.push(() => {
            console.log(`hello, ${name}`);
            this.next();
        });

        return this;
    }

    sleep(t) {
        this.queue.push(() => {
            setTimeout(() => {
                console.log(`${t}s 之后`)
                this.next();
            }, t * 1000)
        })

        return this;
    }

    next() {
        const fn = this.queue.shift();

        fn && fn();
    }
}

exports.PlayBoy = PlayBoy
