/**
 *  create by grguang
 *
 * @flow
 */
const { handleOffsetValueByPoint } = require('../code/hello');

describe('handleOffsetValueByPoint', () => {
    it('component all in mainPad', () => {
        const layers = [{
           width: 50,
           height: 30,
           point: [100,50]
        },{
            width: 200,
            height: 30,
            point: [100,150]
        },{
            width: 80,
            height: 30,
            point: [125,200]
        }];
        const result = {
            offsetPoint: [100,50],
            width: 200,
            height: 180,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
    it('component all in mainPad 2', () => {
        const layers = [{
           width: 75,
           height: 30,
           point: [200,50]
        },{
            width: 200,
            height: 30,
            point: [50,150]
        },{
            width: 50,
            height: 30,
            point: [50,250]
        }];
        const result = {
            offsetPoint: [50,50],
            width: 225,
            height: 230,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
    it('component one in forkPad', () => {
        const layers = [{
           width: 75,
           height: 30,
           point: [-100,50]
        },{
            width: 200,
            height: 30,
            point: [50,100]
        },{
            width: 50,
            height: 30,
            point: [75,200]
        }];
        const result = {
            offsetPoint: [-100,50],
            width: 350,
            height: 180,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
    it('component one in forkPad 1', () => {
        const layers = [{
           width: 250,
           height: 30,
           point: [-300,50]
        },{
            width: 200,
            height: 30,
            point: [50,100]
        },{
            width: 50,
            height: 30,
            point: [75,200]
        }];
        const result = {
            offsetPoint: [-300,50],
            width: 550,
            height: 180,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
    it('component one in forkPad 2', () => {
        const layers = [{
           width: 50,
           height: 30,
           point: [-300,50]
        },{
            width: 200,
            height: 30,
            point: [50,100]
        },{
            width: 50,
            height: 30,
            point: [75,200]
        }];
        const result = {
            offsetPoint: [-300,50],
            width: 550,
            height: 180,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
    it('component some in forkPad', () => {
        const layers = [{
           width: 300,
           height: 30,
           point: [50,-100]
        },{
            width: 150,
            height: 30,
            point: [50,75]
        },{
            width: 100,
            height: 30,
            point: [-150,50]
        }];
        const result = {
            offsetPoint: [-150,-100],
            width: 500,
            height: 205,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
    it('component some in forkPad 1', () => {
        const layers = [{
           width: 300,
           height: 30,
           point: [50,-100]
        },{
            width: 150,
            height: 30,
            point: [50,75]
        },{
            width: 100,
            height: 30,
            point: [-150,50]
        },{
            width: 250,
            height: 30,
            point: [150,150]
        }];
        const result = {
            offsetPoint: [-150,-100],
            width: 550,
            height: 280,
        };
        expect(handleOffsetValueByPoint(layers)).toEqual(result);
    });
});
