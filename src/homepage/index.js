var page = require('page');
var template = require('./template');
var axios = require('axios');
var header = require('../header');

page('/', header, asyncLoadPictures,function (ctx, next) {
  $('title').html('Emagram - Inicio');
  var main = $('#main-container');
  main.empty().append(template(ctx.pictures));
});

async function asyncLoadPictures(ctx, next) {
  try{
    var pictures = fetch('/api/pictures')
    ctx.pictures = await pictures.then(res => res.json());
    next();
  } catch(err) {
    return console.log(err);
  }
}
