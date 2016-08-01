/**
 * Created by zhagnian on 16-7-29.
 */
"use strict"
let _ = require('lodash');
let tags = "3-4-J-1-A";
let tag = "J-3-A-A";
function formatInputs(tags) {
    return tags.split('-');
}
function getNormalPoints(getPoints) {
    return _.chain(getPoints)
        .filter(x=>x !== 'A')
        .map(x=> {
            //console.log(x);
            if (x === "J" || x === "Q" || x === "K") {
                return 10;
            } else
                return x;
        })
        .map(x=>_.parseInt(x))
        .sum()
        .value();
//console.log(a);

}

function getAllPoints(gotNormalPoints, getPoints) {
    let add = gotNormalPoints;
    //console.log(add);
    let sumA;
    let a = _.filter(getPoints, (x=>x === 'A'));
    if (a.length === 0) {
        sumA = add
    }
    let sub = 21 - add;
    if (a.length > 0 && sub < 0) {
        sumA = add + a.length;
    } else if (a.length > 0 && sub > 0) {
        let div = sub / 11;
        //console.log(div);
        if (div < 1) {
            sumA = add + a.length;
        } else if (div > 1 && a.length === 1) {
            sumA = add + 11;
        } else if (div > 1 && a.length > 1) {
            sumA = add + 11 + a.length - 1;
        }

    }

    //console.log(sumA);
    return sumA;

}

function comparePoints(gotAllPoints, gotAllPoint, getPoints, getPoint) {
    if (gotAllPoints > 21 && gotAllPoint > 21) {
        console.log('both loser');
        return 'both loser';
    } else if (gotAllPoints > 21 && gotAllPoint < 21) {
        console.log('B is winner');
        return 'B is winner';
    } else if (gotAllPoints < 21 && gotAllPoint > 21) {
        console.log('A is winner');
        return 'A is winner';
    }
    if (gotAllPoints < 21 && gotAllPoint < 21 && gotAllPoints === gotAllPoint) {
        if (getPoints.length === getPoint.length) {
            console.log("a dead heat");
            return "a dead heat";
        } else if (getPoints.length < getPoint.length) {
            console.log("A is winner");
            return "A is winner";
        } else {
            console.log("B is winner");
            return "B is winner";
        }

    } else if (gotAllPoints < 21 && gotAllPoint < 21 && gotAllPoints !== gotAllPoint) {
        let a = 21 - gotAllPoints;
        let b = 21 - gotAllPoint;
        if (a > b) {
            console.log("B is winner");
            return 'B is winner';
        } else {
            console.log('A is winner');
            return 'A is winner';
        }
    }
}

function poker(tags, tag) {
    let getPoints = formatInputs(tags);
    let gotNormalPoints = getNormalPoints(getPoints);
    let gotAllPoints = getAllPoints(gotNormalPoints, getPoints);


    let getPoint = formatInputs(tag);
    let gotNormalPoint = getNormalPoints(getPoint);
    let gotAllPoint = getAllPoints(gotNormalPoint, getPoint);


    let note = comparePoints(gotAllPoints, gotAllPoint, getPoints, getPoint);
    return note;
}

poker(tags, tag);

module.exports = {
    formatInputs: formatInputs,
    getNormalPoints: getNormalPoints,
    getAllPoints: getAllPoints,
    comparePoints: comparePoints,
    poker: poker
};
