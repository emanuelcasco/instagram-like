var page = require('page');
var template = require('./template');

page('/signup', function (ctx, next) {
  $('title').html('Emagram - Registrarse');
  var main = $('#main-container');
  main.empty().append(template);
  var header = $('#header-container');
  header.empty();
})
