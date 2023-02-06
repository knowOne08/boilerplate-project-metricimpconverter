'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req,res)=>{
    let input = req.query.input;
    let initNum = ConvertHandler.getNum(input);
    let initUnit = ConvertHandler.getUnit(input);

    if(!initNum && !initUnit){
      return res.send('Invalid number and unit')
    } else if(!initNum){
      return res.send("Invalid number")
    } else if(!initUnit){
      return res.send("Invalid unit")
    }

    let returnNum = ConvertHandler.convert(initNum, initUnit );
    let returnUnit = ConvertHandler.getReturnUnit(initNum, initUnit);
    let toString = ConvertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     
    res.json({initNum,initUnit,returnNum,returnUnit,string: toString});
  })
};
