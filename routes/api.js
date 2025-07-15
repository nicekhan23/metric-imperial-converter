'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res) {
      let input = req.query.input;
      
      if (!input) {
        return res.json({ error: 'invalid input' });
      }
      
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      
      // Check for both invalid number and unit
      if (initNum === 'invalid number' && initUnit === 'invalid unit') {
        return res.json({ error: 'invalid number and unit' });
      }
      
      // Check for invalid number
      if (initNum === 'invalid number') {
        return res.json({ error: 'invalid number' });
      }
      
      // Check for invalid unit
      if (initUnit === 'invalid unit') {
        return res.json({ error: 'invalid unit' });
      }
      
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
      });
    });

};