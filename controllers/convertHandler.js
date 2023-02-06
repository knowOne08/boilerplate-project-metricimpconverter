function numberStringSplitter(input){
  let number = input.match(/[.\d\/]/g) || ['1'];
  let string = input.match(/[a-zA-Z]+/g)[0];
  return [number[0],string];
}

function checkdiv(possibleFrac){
  let nums = possibleFrac.split("/");
  if(nums.length>2){
    return false;
  }
  return nums;
}
function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDiv(result); 
    if(!nums){
      return undefined;
    }

    let num1 = nums[0];
    let num2 = nums[1] || "1";

    if(isNaN(num1) || isNaN(num2)){
      return undefined;
    }
    
    result =  parseFloat(num1) / parseFloat(num2);

    return result
  };
  
  this.getUnit = function(input) {
    let result = numberStringSplitter(input)[1].toLowerCase();
    switch(result){
        case "km":
          return "km";
        case "gal":
          return "gal";
        case "lbs":
          return "lbs";
        case "mi":
          return "mi";
        case "l":
          return "L";
        case "kg":
          return "kg";
        default:
          return undefined;
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit==="gal"||initUnit==="GAL"){
      result = 'l'  
    } else if (initUnit === 'l' || initUnit === 'L'){
      result = 'gal'
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(initUnit==="gal"||initUnit==="GAL"){
      result = (initNum*galToL).toFixed(5);  
    } else if (initUnit === 'l' || initUnit === 'L'){
      result = (initNum/galToL).toFixed(5);
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
