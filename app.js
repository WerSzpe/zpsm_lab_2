const _ = require('lodash');

function getMean() {
    let arr = Object.values(arguments);

    let mean = _.mean(arr);

    console.log(mean);
}

getMean(1,2,3,4,5,6)