var page = require('page');
var template = require('./template');

page('/homepage', function (ctx, next) {
  $('title').html('Emagram - Inicio');
  var main = $('#main-container');
  var pictures = [
    {
      user: {
        username: 'hellmet',
        name: 'Emanuel Casco',
        avatar: 'http://www.templatedeck.com/demos/slick_html/img/blogger.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: true,
      createdAt: new Date()
    },
    {
      user: {
        username: 'hellmet',
        name: 'Guadalupe Escobar',
        avatar: 'http://materializecss.com/images/yuna.jpg'
      },
      url: 'http://materializecss.com/images/sample-1.jpg',
      likes: 0,
      liked: false,
      createdAt: (new Date() - 1486076400)
    }
  ];
  main.empty().append(template(pictures));

})
