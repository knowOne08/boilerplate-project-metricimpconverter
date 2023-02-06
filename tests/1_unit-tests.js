const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("Correct return unit for each valid input unit", function (done) {
        for (let i = 0; i < inputArray.length; i++) {
          inputArray[i].forEach(function(unit) {
            assert.equal(
            convertHandler.getReturnUnit(
              convertHandler.getUnit(unit)
              ),responseArray[i]);
          });
        }
        done();
      });
});