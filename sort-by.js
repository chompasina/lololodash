var _ = require("lodash");

var worker = function(items){
  // return _.sortBy(items, function(item) { 
  //   return -item.quantity; 
  return _.sortBy(items, "quantity").reverse();
};

module.exports = worker;