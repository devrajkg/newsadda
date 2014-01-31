
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index1', { title: 'Hello World' });
};

