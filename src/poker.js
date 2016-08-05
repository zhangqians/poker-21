/**
 * Created by zhagnian on 16-7-29.
 */
"use strict"
let _ = require('lodash');
function getCards(inputs) {
    return inputs.split('-');

}
function convertJkqToNumberCards(formattedCodes) {
    return _.map(formattedCodes, x=> {
        return (['J', 'Q', 'K'].includes(x)) ? '10' : x
    });
}

function getPointAndCount(numberCards) {
    let countOfA = _(numberCards).filter(x => x === 'A').size();
    let initialPoint = _(numberCards)
        .map(x => x === 'A' ? 1 : parseInt(x))
        .sum();

    let point = _(_.times(countOfA)).reduce(bestPoint => {
        let tryPoint = bestPoint + 10;
        return tryPoint > 21 ? bestPoint : tryPoint;
    }, initialPoint);

    return {
        point:point,
        count: numberCards.length
    };
}
function getComparedResult(aPointAndCount, bPointAndCount) {
    let {point:aPoint, count:aCount} = aPointAndCount;
    let {point:bPoint, count:bCount} = bPointAndCount;
    if (aPoint > 21 && bPoint > 21) return 'tied';
    if (aPoint > 21) return 'B won';
    if (bPoint > 21) return 'A won';
    if (aPoint > bPoint) return 'A won';
    if (bPoint > aPoint) return 'B won';
    if (aCount > bCount) return 'B won';
    if (bCount > aCount) return 'A won';
    return 'tied';
}

function printWinner(inputA, inputB) {
    let numberCodeA=convertJkqToNumberCards(getCards(inputA));
    let aPointAndCount = getPointAndCount(numberCodeA);
    let numberCodeB=convertJkqToNumberCards(getCards(inputB));
    let bPointAndCount = getPointAndCount(numberCodeB);
    let result = getComparedResult(aPointAndCount, bPointAndCount);
    console.log(result);
}



module.exports = {
    getCards,
    convertJkqToNumberCards,
    getPointAndCount,
    getComparedResult,
    printWinner
}