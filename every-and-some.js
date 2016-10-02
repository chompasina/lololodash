var _ = require("lodash");

var worker = function(cities){
  var results = {
    hot: [],
    warm: []
  };
  
  function check_temp(cities){
    return cities > 19;
  }
  
  _.forEach(cities, function (town, townname){
    if(_.every(town,check_temp)){
      results.hot.push(townname);
    } else if (_.some(town,check_temp)){
      results.warm.push(townname);
    }
  });
  
  return results;
};


module.exports = worker;