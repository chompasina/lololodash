var _ = require("lodash");

var worker = function(freelancers){
    var average,
        underperform,
        overperform;
  
    freelancers = _.sortBy(freelancers, "income");
    
    total = _.reduce(freelancers, function(sum,num){
      return sum + num.income;
    }, 0);
    
    average = total/freelancers.length;

    underperform = _.filter(freelancers, function(num){
        return num.income <= average;
        // is less than or equal to average
    });
    
    overperform = _.filter(freelancers, function(num){
      return num.income > average;
    });
    
    return {
      average: average,
      underperform: underperform,
      overperform: overperform
    };
};

module.exports = worker;