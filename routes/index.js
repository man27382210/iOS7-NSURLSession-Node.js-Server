
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'iOS7 NSURLSession exapmle' });
};