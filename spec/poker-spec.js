/**
 * Created by zhagnian on 16-7-29.
 */
'use strict';
let {formatInputs, getNormalPoints, getAllPoints, comparePoints,poker}=require('../src/poker.js');

//1
describe('poker.js', function () {
    it('should print format points inputs', ()=> {
        let inputs = "3-4-J-1-A";
        let builtFormatPoints = formatInputs(inputs);
        let printFormation = ['3', '4', 'J', '1', 'A'];
        expect(builtFormatPoints).toEqual(printFormation);

    });
//2

    it('should print normal points', ()=> {
        let inputs = ['3', '4', '5', '1', '4'];
        let gotNormalPoints = getNormalPoints(inputs);
        let printNormalPoints = 17;
        expect(gotNormalPoints).toEqual(printNormalPoints);
    });


    it('should print normal points', ()=> {
        let inputs = ['J', 'K', 'J', 'Q'];
        let gotNormalPoints = getNormalPoints(inputs);
        let printNormalPoints = 40;
        expect(gotNormalPoints).toEqual(printNormalPoints);
    });


    it('should print normal points', ()=> {
        let inputs = ['J', 'K', 'J', 'A'];
        let gotNormalPoints = getNormalPoints(inputs);
        let printNormalPoints = 30;
        expect(gotNormalPoints).toEqual(printNormalPoints);
    });


    it('should print normal points', ()=> {
        let inputs = ['3', '4', 'J', '1', 'A'];
        let gotNormalPoints = getNormalPoints(inputs);
        let printNormalPoints = 18;
        expect(gotNormalPoints).toEqual(printNormalPoints);
    });


    it('should print format points inputs', ()=> {
        let inputs = "3-A-J-1-A";
        let builtFormatPoints = formatInputs(inputs);
        let printFormation = ['3', 'A', 'J', '1', 'A'];
        expect(builtFormatPoints).toEqual(printFormation);

    });




    it('should print normal points', ()=> {
        let inputs = ['3', 'A', 'J', '1', 'A'];
        let gotNormalPoints = getNormalPoints(inputs);
        let printNormalPoints = 14;
        expect(gotNormalPoints).toEqual(printNormalPoints);
    });


    //3

    it('should print all points', ()=> {
        let inputs = 20;
        let input = ['3', '4', '10', '3'];
        let allPoints = getAllPoints(inputs, input);
        let builtAllPoints = 20;
        expect(allPoints).toEqual(builtAllPoints);
    });

    it('should print all points', ()=> {
        let inputs = 18;
        let input = ['3', '4', 'J', '1'];
        let allPoints = getAllPoints(inputs, input);
        let builtAllPoints = 18;
        expect(allPoints).toEqual(builtAllPoints);
    });

    it('should print all points', ()=> {
        let inputs = 30;
        let input = ['J', 'J', 'K'];
        let allPoints = getAllPoints(inputs, input);
        let builtAllPoints = 30;
        expect(allPoints).toEqual(builtAllPoints);
    });


    it('should print all points', ()=> {
        let inputs = 5;
        let input = ['2', '3', 'A', 'A', 'A'];
        let allPoints = getAllPoints(inputs, input);
        let builtAllPoints = 18;
        expect(allPoints).toEqual(builtAllPoints);
    });



    it('should print all points', ()=> {
        let inputs = 22;
        let input = ['3', '4', '5', 'A', 'J'];
        let allPoints = getAllPoints(inputs, input);
        let builtAllPoints = 23;
        expect(allPoints).toEqual(builtAllPoints);
    });


    it('should print all points', ()=> {
        let inputs = 14;
        let input = ['3', 'A', 'J', '1', 'A'];
        let allPoints = getAllPoints(inputs, input);
        let builtAllPoints = 16;
        expect(allPoints).toEqual(builtAllPoints);
    });


    //4
    it('should print comparePoints result', ()=> {
        let inputs = 19;
        let input = 16;
        let pointA = ['3', '4', 'J', '1', 'A'];
        let pointB = ['3', 'A', 'J', '1', 'A'];
        let builtWinner = comparePoints(inputs, input, pointA, pointB);
        let printMessage = "A is winner";
        expect(builtWinner).toEqual(printMessage);

    });


    it('should print comparePoints result', ()=> {
        let inputs = 18;
        let input = 23;
        let pointA = ['2', '3', 'A', 'A', 'A'];
        let pointB = ['3', '4', '5', 'A', 'J'];
        let builtWinner = comparePoints(inputs, input, pointA, pointB);
        let printMessage = "A is winner";
        expect(builtWinner).toEqual(printMessage);

    });


    it('should print comparePoints result', ()=> {
        let inputs = 24;
        let input = 27;
        let pointA = ['2', 'J', '2','Q'];
        let pointB = ['1', 'Q', '5', 'A', 'J'];
        let builtWinner = comparePoints(inputs, input, pointA, pointB);
        let printMessage = "both loser";
        expect(builtWinner).toEqual(printMessage);

    });


    it('should print comparePoints result', ()=> {
        let inputs = 14;
        let input = 14;
        let pointA = ['2', 'J', '2'];
        let pointB = ['1', 'Q', '3'];
        let builtWinner = comparePoints(inputs, input, pointA, pointB);
        let printMessage = "a dead heat";
        expect(builtWinner).toEqual(printMessage);

    });


    it('should print comparePoints result', ()=> {
        let inputs = 14;
        let input = 14;
        let pointA = ['2', 'J', '1','1'];
        let pointB = ['1', 'Q', '3'];
        let builtWinner = comparePoints(inputs, input, pointA, pointB);
        let printMessage = "B is winner";
        expect(builtWinner).toEqual(printMessage);

    });




//集成测试
    it('should print the winner', ()=> {
        let inputs = "A-1-3-5-J";
        let input = "A-A-4";
        let getWinner = poker(inputs, input);
        let printWinner = "A is winner";
        expect(getWinner).toEqual(printWinner);

    });


    it('should print the winner', ()=> {
        let inputs = "3-4-A";
        let input = "7-A";
        let getWinner = poker(inputs, input);
        let printWinner = "B is winner";
        expect(getWinner).toEqual(printWinner);

    });


    it('should print the winner', ()=> {
        let inputs = "1-3-4-A";
        let input = "1-3-4-A";
        let getWinner = poker(inputs, input);
        let printWinner = "a dead heat";
        expect(getWinner).toEqual(printWinner);

    });


    it('should print the winner', ()=> {
        let inputs = "J-3-K-A";
        let input = "Q-3-J-A";
        let getWinner = poker(inputs, input);
        let printWinner = "both loser";
        expect(getWinner).toEqual(printWinner);

    });


    it('should print the winner', ()=> {
        let inputs = "J-3-K-A";
        let input = "1-3-1-A";
        let getWinner = poker(inputs, input);
        let printWinner = "B is winner";
        expect(getWinner).toEqual(printWinner);

    });


});
