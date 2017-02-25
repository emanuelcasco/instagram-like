var page = require('page');
var template = require('./template');
var axios = require('axios');

page('/', loadPictures,function (ctx, next) {
  $('title').html('Emagram - Inicio');
  var main = $('#main-container');

  main.empty().append(template(ctx.pictures));
});

function loadPictures(ctx, next) {
  axios
    .get('/api/pictures')
    .then(function (res){
      ctx.pictures = res.data;
      next();
    }).catch(function (err){
      console.log(err);
    });
}
