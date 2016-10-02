var _ = require("lodash");

var worker = function(comments){
  return _.chain(comments)
  .groupBy("username")
  .map(function(comment, name){
    return {username: name, comment_count: _.size(comment)};
  })
  .sortBy(function(counted){
    return -counted.comment_count;
  });
};

module.exports = worker;