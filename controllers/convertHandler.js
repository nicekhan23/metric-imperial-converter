function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    // Extract number part (everything before letters)
    let numRegex = /^[0-9\/\.]+/;
    let numMatch = input.match(numRegex);
    
    if (!numMatch) {
      // No number found, default to 1
      result = 1;
    } else {
      let numStr = numMatch[0];
      
      // Check for double fraction (more than one '/')
      let slashCount = (numStr.match(/\//g) || []).length;
      if (slashCount > 1) {
        return 'invalid number';
      }
      
      // Handle fraction
      if (numStr.includes('/')) {
        let parts = numStr.split('/');
        if (parts.length === 2) {
          let numerator = parseFloat(parts[0]);
          let denominator = parseFloat(parts[1]);
          
          if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
            return 'invalid number';
          }
          
          result = numerator / denominator;
        } else {
          return 'invalid number';
        }
      } else {
        // Handle decimal or whole number
        result = parseFloat(numStr);
        if (isNaN(result)) {
          return 'invalid number';
        }
      }
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    // Extract unit part (letters at the end)
    let unitRegex = /[a-zA-Z]+$/;
    let unitMatch = input.match(unitRegex);
    
    if (!unitMatch) {
      return 'invalid unit';
    }
    
    let unit = unitMatch[0].toLowerCase();
    
    // Valid units (case insensitive)
    let validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    
    if (validUnits.includes(unit)) {
      // Return proper case for 'L'
      result = unit === 'l' ? 'L' : unit;
    } else {
      result = 'invalid unit';
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    const unitMap = {
      'gal': 'L',
      'L': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    
    result = unitMap[initUnit] || 'invalid unit';
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    const unitSpellings = {
      'gal': 'gallons',
      'L': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    
    result = unitSpellings[unit] || 'invalid unit';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = 'invalid unit';
    }
    
    // Round to 5 decimal places
    if (typeof result === 'number') {
      result = Math.round(result * 100000) / 100000;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    let initUnitSpelled = this.spellOutUnit(initUnit);
    let returnUnitSpelled = this.spellOutUnit(returnUnit);
    
    result = `${initNum} ${initUnitSpelled} converts to ${returnNum} ${returnUnitSpelled}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;