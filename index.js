'use strict';
var _ = require('lodash');


module.exports = function (data, sourceDuration, targetDuration, summarizer) {
    if (!summarizer) {
        summarizer = [
            {
                fieldName: "high",
                method: "max"
            },
            {
                fieldName: "low",
                method: "min"
            },
            {
                fieldName: "date",
                method: "first"
            },
            {
                fieldName: "open",
                method: "first"
            },
            {
                fieldName: "close",
                method: "last"
            },
            {
                fieldName: "volume",
                method: "sum"
            }
        ];
    }
    var windowWidth = Math.floor(targetDuration / sourceDuration);
    var input = _.reverse(data);
    var output = [];
    for (var i = 0; i < input.length / windowWidth; i++) {
        var summary = {};
        var context = input.slice(i * windowWidth, (i * windowWidth) + windowWidth);
        _.each(summarizer, function (field) {
            if (field.method === 'sum') {
                summary[field.fieldName] = _.sumBy(context, function (o) {
                    return +(o[field.fieldName]);
                });
            }
            if (field.method === 'max') {
                summary[field.fieldName] = _.maxBy(context, field.fieldName)[field.fieldName];
            }
            if (field.method === 'min') {
                summary[field.fieldName] = _.minBy(context, field.fieldName)[field.fieldName];
            }
            if (field.method === 'first') {
                summary[field.fieldName] = _.head(context)[field.fieldName];
            }
            if (field.method === 'last') {
                summary[field.fieldName] = _.last(context)[field.fieldName];
            }
        });
        output.push(summary);
    }
    return _.reverse(output);
};