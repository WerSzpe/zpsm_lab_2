const _ = require('lodash');

function getMean() {
    let arr = Object.values(arguments);

    let mean = _.mean(arr);

    console.log(mean);
}

function getMin() {
    let arr = Object.values(arguments);
    let arrMin = _.min(arr);
    console.log(arrMin)
}

function getMax() {
    let arr = Object.values(arguments);
    let arrMax = _.max(arr);
    console.log(arrMax)
}

getMean(1,2,3,4,5,6);
getMin(1,2,3,4,5,6);
getMax(1,2,3,4,5,6);