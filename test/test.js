'use strict';

var expect = require('chai').expect;
var changer = require('../index');
var data = require("./data.json");

describe('ticker-duration-changer', function () {
    it('should change data duration from 1 day to 3 days', function () {
        var result = changer(data.DATA,1, 3);
        expect(result.length).to.equal(34);
        expect(result[0].high).to.equal("8325");
        expect(result[0].low).to.equal("8200");
        expect(result[0].open).to.equal("8300");
        expect(result[0].close).to.equal("8300");

        expect(result[result.length-1].high).to.equal("8000");
        expect(result[result.length-1].low).to.equal("7725");
        expect(result[result.length-1].open).to.equal("7975");
        expect(result[result.length-1].close).to.equal("7850");
    });

});