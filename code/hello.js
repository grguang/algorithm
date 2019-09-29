/**
 *  create by grguang
 *
 * @flow
 */

function handleOffsetValueByPoint(layers) {
    if (!layers || !layers.length) {
        return { offsetPoint: [0, 0], width: 0, height: 0 };
    }
    const initX = layers[0].point[0];
    const initY = layers[0].point[1];
    const initWidth = layers[0].width;
    const initHeight = layers[0].height;

    let offsetX = initX;
    let offsetY = initY;
    let width = initX + initWidth;
    let height = initY + initHeight;

    for (let i = 1; i < layers.length; i++) {
        const item = layers[i];
        const { point, width: itemWidth, height: itemHeight } = item;
        const [xValue, yValue] = point;
        offsetX = Math.min(offsetX, xValue);
        offsetY = Math.min(offsetY, yValue);
        const xSub = xValue + itemWidth;
        const ySub = yValue + itemHeight;
        if (xSub > width) {
            width = xSub;
        }
        if (ySub > height) {
            height = ySub;
        }
    }
    return { offsetPoint: [offsetX, offsetY], width: width - offsetX, height: height - offsetY };
}

exports.handleOffsetValueByPoint = handleOffsetValueByPoint;
