var page = require('page');
var template = require('./template');
var axios = require('axios');
var header = require('../header');
var loader = require('../loader');

page('/', header, loading, asyncLoadPictures,function (ctx, next) {
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

function loading (ctx, next) {
  var main = $('#main-container');
  var elem = loader;
  main.empty().append(elem);
  next();
}
