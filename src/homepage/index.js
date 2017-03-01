var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var header = require('../header');
var loader = require('../loader');

page('/', header, loading, asyncLoad, function (ctx, next) {
  title('Emagram');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
})

function loading(ctx, next) {
  var main = $('#main-container');
  var elem = loader;
  main.empty().append(elem);
  next();
}

async function asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(res => res.json());
    next();
  } catch (err) {
    return console.log(err);
  }
}
