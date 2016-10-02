var _ = require("lodash");

var worker = function(item) {
 return  _.filter(item, {active: true});
};

module.exports = worker; 