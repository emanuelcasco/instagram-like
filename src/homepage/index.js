var page = require('page');
var template = require('./template');
var request = require('superagent');

page('/', loadPictures,function (ctx, next) {
  $('title').html('Emagram - Inicio');
  var main = $('#main-container');

  main.empty().append(template(ctx.pictures));
});

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end(function (err, res){
      if(err) return console.log(err);

      ctx.pictures = res.body;
      next();
    });
}
