var _ = require("lodash");

var worker = function(orders){
  var results = [],
      total = 0;
      
  orders = _.groupBy(orders, 'article');
  
  _.forEach(orders, function(item, key){
    key = parseInt(key);
    total = 0;
    
    if (item.length ===1){
      total = item[0].quantity;
    } else {
      total = _.reduce(item, function(sum,item){
        return sum + item.quantity;
      }, 0);
    }
    
    results.push({
      article: key,
      total_orders: total
    });
  });

  results = _.sortBy(results, "total_orders").reverse();
  
  return results;
  
};

module.exports = worker;