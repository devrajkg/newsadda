
/*
 * GET home page.
 */

exports.newsadda = function(req, res){
  res.render('newsadda', { title: 'Hello World' });
};

exports.ex = function(req, res){
  res.render('index1', { title: 'Hello World' });
};
exports.commerce = function(req, res){
  res.render('commerce', { title: 'Hello commerce' });
};
exports.state = function(req, res){
  res.render('state', { title: 'Hello commerce' });
};
exports.columns = function(req, res){
  res.render('columns', { title: 'Hello commerce' });
};
exports.movies = function(req, res){
  res.render('movies', { title: 'Hello commerce' });
};
exports.national = function(req, res){
  res.render('national', { title: 'Hello commerce' });
};
exports.science = function(req, res){
  res.render('science', { title: 'Hello commerce' });
};
exports.special = function(req, res){
  res.render('special', { title: 'Hello commerce' });
};
exports.sports = function(req, res){
  res.render('sports', { title: 'Hello commerce' });
};
exports.agriculture = function(req, res){
  res.render('agriculture', { title: 'Hello agriculture' });
};
exports.foreign = function(req, res){
  res.render('foreign', { title: 'Hello foreign' });
};